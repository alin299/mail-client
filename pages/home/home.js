// pages/home/home.js
import {Banner} from "../../model/banner";
import {Category} from "../../model/category";
import {Activity} from "../../model/activity";
import {Theme} from "../../model/theme";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerB: null,
    category: [],
    activity: null,
    themeESpuList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    this.initData();
  },

  async initData() {
    const theme = new Theme();
    await theme.getThemes();
    const themeA = theme.getHomeLocationA();
    const themeE = theme.getHomeLocationE();
    const themeF = theme.getHomeLocationF();
    const themeH = theme.getHomeLocationH();
    const bannerB = await Banner.getHomeLocationB();
    const bannerG = await Banner.getHomeLocationG()
    let themeESpuList = []
    if (themeE.online) {
      let data = await Theme.getHomeLocationESpu();
      themeESpuList = data.spu_list.slice(0, 8);
    }
    const category = await Category.getGridCategory();
    const activity = await Activity.getLocationD();
    this.setData({
      bannerB,
      bannerG,
      category,
      activity,
      themeA,
      themeE,
      themeF,
      themeH,
      themeESpuList
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})