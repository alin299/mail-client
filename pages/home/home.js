// pages/home/home.js
import {Banner} from "../../models/banner";
import {Category} from "../../models/category";
import {Activity} from "../../models/activity";
import {Theme} from "../../models/theme";
import {SpuPaging} from "../../models/spu-paging";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerB: null,
    category: [],
    activity: null,
    themeESpuList: [],
    loadingType: "loading"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    this.initData();
    this.initBottomSpuList()

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
  onReachBottom: async function () {
    const data = await this.data.supPaging.next();
    if (!data) {
      return
    }
    wx.lin.renderWaterFlow(data.items)
    if (!data.hasMoreData) {
      this.setData({
        loadingType: "end"
      });
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  async initBottomSpuList() {
    const paging = SpuPaging.getLatestPaging();
    this.data.supPaging = paging;
    const data = await paging.next()
    if (!data) {
      return;
    }
    wx.lin.renderWaterFlow(data.items)
  },
})