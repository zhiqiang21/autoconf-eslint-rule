#!/usr/bin/env node
/**
 * @format
 * @file 自动配置eslint
 * @date 2020/04/27
 * @author hpuhouzhiqiang@didiglobal.com
 */

const path = require('path');
const chalk = require('chalk');
const fs = require('fs-extra');
const baseConf = require('../lint/eslintrc.common');
const reactConfRules = require('../lint/eslintrc.react.rules').rules;
const CONST_PLUGIN = require('./const');
const PACKAGEJSON = require('../package.json');
const initPluginFN = require('./initPlug');
const _lodash = require('lodash');

const argsList = process.argv;
const cwd = process.cwd();

const baseConfRules = baseConf.rules || [];
const vueConf =  _lodash.cloneDeep(baseConf);
const reactConf = _lodash.cloneDeep(baseConf);

_lodash.set(vueConf, 'extends', ['eslint:recommended', 'plugin:vue/essential']);
_lodash.set(vueConf, 'plugins', ['babel', 'vue']);
_lodash.set(reactConf, 'plugins', ['babel', 'react']);
_lodash.set(reactConf, 'rules', {...baseConfRules, ...reactConfRules});

execInitConf();

function execInitConf() {
    helpString();

    if (argsList.length === 2) {
        writeEslintFile(CONST_PLUGIN.normalPlugin, baseConf);
    }

    if(argsList.length === 3 && argsList[2] == '--vue') {
        writeEslintFile(CONST_PLUGIN.vuePlugin, vueConf, 'react');
    }

    if(argsList.length === 3 && argsList[2] == '--react') {
        writeEslintFile(CONST_PLUGIN.reactPlugin, reactConf, 'vue');
    }

}


function writeEslintFile(plugin, conf, type = 'normal') {
    const checkPlugin = checkPackagePlugin(plugin);

    if (!checkPlugin) {
        type === 'normal' && initPluginFN.installJSLintPlugin();
        type === 'vue' && initPluginFN.installReactLintPlugin();
        type === 'react' && initPluginFN.installVueLintPlugin();
    }

    fs.writeFileSync(
        path.resolve(cwd, './.eslintrc.js'),
        `module.exports=${JSON.stringify(conf)}`,
        {encoding: 'utf8'}
    );
}

// 检查package.json中是否已经存在lit所需插件
function checkPackagePlugin(params) {
    const dependencies = PACKAGEJSON.dependencies || {};
    const devDependencies = PACKAGEJSON.devDependencies || {};

    const dependenciesList = [
        ...Object.keys(dependencies),
        ...Object.keys(devDependencies)
    ];

    if (typeof params == 'string') {
        if (dependenciesList.includes(params)) {
            return true;
        }

        return false;
    }

    if (Array.isArray(params)) {
        for (let i = 0; i < params.length; i++) {
            if (!dependenciesList.includes(params[0])) {
                // 只要有一个不存在就当做全部不存在
                return false;
            }
        }

        return true;
    }
}

function helpString() {
    console.log(chalk.red('initLintRule ----> init javascript lint rules'));
    console.log(
        chalk.red('initLintRule --vue ----> init javascript and vue lint rules')
    );
    console.log(
        chalk.red(
            'initLintRule --react ----> init javascript and react lint rules'
        )
    );
}
