#!/usr/bin/env node

/**
 * @format
 * @file 初始化eslint插件
 * @date 2020/04/27
 * @author hpuhouzhiqiang@gmail.com
 */

const CONST_PLUGIN = require('./const');
const chalk = require('chalk');
const shellJS = require('shelljs');

const argvlist = process.argv;

// mainFn();

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

export function installJSLintPlugin() {
  shellJS.exec(`npm i ${CONST_PLUGIN.normalPlugin.join('  ')} --save-dev`);
}

// install normal javascript and vue plugin
export function installVueLintPlugin() {
  shellJS.exec(
    `npm i ${mergePluginList(
      CONST_PLUGIN.normalPlugin,
      CONST_PLUGIN.vuePlugin
    ).join('  ')} --save-dev`
  );
}

// install normal js plugin and react
export function installReactLintPlugin(param) {
  shellJS.exec(
    `npm i ${mergePluginList(
      CONST_PLUGIN.normalPlugin,
      CONST_PLUGIN.reactPlugin
    ).join('  ')} --save-dev`
  );
}

// install normal js plugin and vue react
function installVueReactPlugin(param) {
  shellJS.exec(
    `npm i ${mergePluginList(
      CONST_PLUGIN.normalPlugin,
      CONST_PLUGIN.reactPlugin,
      CONST_PLUGIN.vuePlugin
    ).join('  ')} --save-dev`
  );
}

// print warn about command
function helpStirng() {
  console.log(chalk.red('initLintPlug ----> install javascript lint plugin'));
  console.log(
    chalk.red('initLintPlug --vue ----> install javascript and vue lint plugin')
  );
  console.log(
    chalk.red(
      'initLintPlug --react ----> install javascript and react lint plugin'
    )
  );
}
