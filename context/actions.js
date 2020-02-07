const actions = (_this)=>{
    return {
        handleMessage:(m)=>{
             _this.setState({
                 message:m
             })
        },
        setPlayBoxShow:(e)=>{
            // 悬浮播放 窗口
             _this.setState({
                show:e
             }) 
        },
        setImgUrl:(url)=>{
            // 图片地址链接
            _this.setState({
                imgUrl:url
            })
        },
        setPlayUrl:(url)=>{
            // 播放地址
            _this.setState({
                   playLink:url
               })
        },
        setPlay:(e)=>{
            // 播放暂停
            _this.setState({
                play:e
            })
        },
        upDateTime:(data)=>{
            // 提交 当前播放时间的方法
            _this.setState({
                current:data.currentTime
            })
        },
        setDuration:(data)=>{
            // 提交 播放总时长
            _this.setState({
                duration:data.duration
            })
        },
        setTime:(value)=>{
           _this.Video.seek(value)
        },
        changeLoopType:()=>{
            let loop = _this.state.loop
            
            if(loop<2){
                loop+=1
            }else {
                loop=0
            }
            _this.setState({
                loop:loop
            })
        },
        setAdmin:(mess)=>{
            // 修改 用户信息
            _this.setState({
                admin:mess
            })
        }
    }
}
export default actions