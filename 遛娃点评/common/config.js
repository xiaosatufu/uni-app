let url_config = ""


console.log(process.env.NODE_ENV)
if(process.env.NODE_ENV === 'development'){
    // 开发环境
    url_config = 'http://test-liuwa.hupovip.net/'
}else{
    // 生产环境
    url_config = 'https://*****.com/'
}

export default url_config