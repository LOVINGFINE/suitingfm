const store = {
    nav:null,
    admin:null,
    message: {
        id: "99391000",
        title: "相处之道：爱是恒久的忍耐？ ",
        cover: "https://ossimg.xinli001.com/20171225/802da3fdf0c4b4e0be772d2176fceb38.jpg!120x120",
        url: "http://yiapi.xinli001.com/fm/media-url/0/99391000",
        speak: "文馨",
        favnum: "315",
        viewnum: "88507",
        background: "",
        is_teacher: false,
        absolute_url: "http://static.xinli001.com/msite/index.html#/fm-audio-share?id=99391000",
        url_list: [],
        status: "1"
    },
    // 播放fm 信息
    show: true,
    // 悬浮播放窗口显示与隐藏
    play: true,
    // 是否播放
    current: 0,
    // 播放的当前时间
    duration: 0,
    // 音频总时长
    loop: 0,
    // 循环模式 0 为列表播放 1为单曲循环 2为随机播放
    playList: ['http://yiapi.xinli001.com/fm/media-url/0/99389004']
    // 播放列表
}

export default store