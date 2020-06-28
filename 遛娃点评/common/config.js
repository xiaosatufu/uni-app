let url_config = ""


console.log(process.env.NODE_ENV)
if(process.env.NODE_ENV === 'development'){
    // 开发环境
    url_config = 'https://test-liuwa.hupovip.net/'
    // url_config = 'https://test-liuwa-kaka.hupovip.cn/'
}else{
    // 生产环境
    url_config = 'https://*****.com/'
}

export default url_config