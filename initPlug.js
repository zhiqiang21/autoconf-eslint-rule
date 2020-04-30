#!/usr/bin/env node

/**
 * @format
 * @file 初始化eslint插件
 * @date 2020/04/27
 * @author hpuhouzhiqiang@didiglobal.com
 */

const chalk = require('chalk');
const shellJS = require('shelljs');

const argvlist = process.argv;

const normalPlugin = ['eslint', 'babel-eslint', 'eslint-plugin-babel'];
const vuePlugin = ['eslint-plugin-vue'];
const reactPlugin = ['eslint-plugin-react'];

mainFn();

function mainFn() {
    helpStirng();

    // install js lint plugin
    if (argvlist.length === 2) {
        return installJSLintPlugin();
    }

    // install vue or react plugin
    if (argvlist.length === 3 && argvlist[2] === '--vue') {
        return installVueLintPlugin();
    } else if (argvlist.length === 3 && argvlist[2] === '--react') {
        return installReactLintPlugin();
    }

    // install vue and react plugin
    if (argvlist.length === 4) {
        return installVueReactPlugin();
    }
}

/**
 *
 * @param {*} _pre  js plugin list
 * @param {*} _next  vue or react plugin list
 */
function mergePluginList(_pre = [], _next = []) {
    return _pre.concat(_next);
}

function installJSLintPlugin() {
    shellJS.exec(`npm i ${normalPlugin.join('  ')} --save-dev`);
}


// install normal javascript and vue plugin
function installVueLintPlugin() {
    shellJS.exec(
        `npm i ${mergePluginList(normalPlugin, vuePlugin).join(
            '  '
        )} --save-dev`
    );
}

// install normal js plugin and react
function installReactLintPlugin(param) {
    shellJS.exec(
        `npm i ${mergePluginList(normalPlugin, reactPlugin).join(
            '  '
        )} --save-dev`
    );
}

// install normal js plugin and vue react
function installVueReactPlugin(param) {
    shellJS.exec(
        `npm i ${mergePluginList(normalPlugin, reactPlugin, vuePlugin).join(
            '  '
        )} --save-dev`
    );
}

// print warn about command
function helpStirng() {
    console.log(chalk.red('initLintPlug ----> install javascript lint plugin'));
    console.log(
        chalk.red(
            'initLintPlug --vue ----> install javascript and vue lint plugin'
        )
    );
    console.log(
        chalk.red(
            'initLintPlug --react ----> install javascript and react lint plugin'
        )
    );
}
