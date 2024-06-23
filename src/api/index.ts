/*
 * @file: 所有的接口列表
 * 宝可梦api https://pokeapi.co/about
 */
import {baseURL} from '../utils/variable';

import http from './httpIndex';
import {pokemonOptions} from './http';

/**
 * @function get
 * @description 请求测试
 */

export function fetchPokemon(data: pokemonOptions) {
  return http({
    url: ' https://pokeapi.co/api/v2/pokemon',
    params: data
  });
}
/**
 * @function post
 * @description 请求测试
 */

export function fetchPostTest(data: any) {
  return http({
    url: baseURL + '/xxx/list',
    method: 'post',
    data
  });
}
export function fetchPostLogin(data: any) {
  return http({
    url: baseURL + 'login',
    method: 'post',
    data
  });
}
export function fetchGetRelationLeaderAddress(params: any) {
  return http({
    url: baseURL + 'data/relationLeaderAddress',
    method: 'get',
    params
  });
}
export function fetchGetUserInfo(params: any) {
  return http({
    url: baseURL + 'data/getUserInfo',
    method: 'get',
    params
  });
}
export function getMyTeamInfoVO(params: any) {
  return http({
    url: baseURL + 'data/getMyTeamInfoVO',
    method: 'get',
    params
  });
}
export function getMyInvitationAddressList(params: any) {
  return http({
    url: baseURL + 'data/getMyInvitationAddressList',
    method: 'get',
    params
  });
}
export function mintDufInfo(params: any) {
  return http({
    url: baseURL + 'data/mintDufInfo',
    method: 'get',
    params
  });
}
export function myEarningsInfo(params: any) {
  return http({
    url: baseURL + 'data/myEarningsInfo',
    method: 'get',
    params
  });
}
export function myTeamEarningsInfo(params: any) {
  return http({
    url: baseURL + 'data/myTeamEarningsInfo',
    method: 'get',
    params
  });
}
export function getBurnFcInfo(params: any) {
  return http({
    url: baseURL + 'data/getBurnFcInfo',
    method: 'get',
    params
  });
}
export function withdrawDuf(params: any) {
  return http({
    url: baseURL + 'data/withdrawDuf',
    method: 'get',
    params
  });
}
// http://127.0.0.1:8888/data/getFcAmountByUSDT?amount=1000000000000000000
export function getFcAmountByUSDT(params: any) {
  return http({
    url: baseURL + 'data/getFcAmountByUSDT',
    method: 'get',
    params
  });
}
export function mintDufApi(params: any) {
  return http({
    url: baseURL + 'data/mintDuf',
    method: 'get',
    params
  });
}

export function loginBack(data: any) {
  return http({
    url: baseURL + 'loginBack/loginBack',
    method: 'get',
    data
  });
}
export function changeLevel(params: any) {
  return http({
    url: baseURL + 'loginBack/changeLevel',
    method: 'get',
    params
  });
}
export function listUser(params: any) {
  return http({
    url: baseURL + 'loginBack/listUser',
    method: 'get',
    params
  });
}
export function setDufPirce(params: any) {
  return http({
    url: baseURL + 'loginBack/setDufPirce',
    method: 'get',
    params
  });
}
export function getAnnouncementList() {
  return http({
    url: baseURL + 'data/getAnnouncementList',
    method: 'get'
  });
}
export function getTokenPrice() {
  return http({
    url: baseURL + 'data/getTokenPrice',
    method: 'get'
  });
}
export function swapDuf(params: any) {
  return http({
    url: baseURL + 'data/swapDuf',
    method: 'get',
    params
  });
}

export function getAmountoutUSDT(params: any) {
  return http({
    url: baseURL + 'data/getAmountoutUSDT',
    method: 'get',
    params
  });
}
