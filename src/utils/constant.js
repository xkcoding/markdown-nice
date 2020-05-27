export const CLIENT_ID = process.env.NODE_ENV === "development" ? "e791aa2a7a64b3f766a2" : "b3a3c46bd66318367efa";
export const CLIENT_SECRET =
  process.env.NODE_ENV === "development"
    ? "e80cde65c7071286086077892f3336bc2a3f4576"
    : "dfd9fdc1da6a6b10e473280bf0a379513f1d154d";

export const PROXY = "https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token";
export const SM_MS_PROXY = "https://cors-anywhere.herokuapp.com/https://sm.ms/api/upload";
export const ACCESS_TOKEN = "ACCESS_TOKEN";

export const USERNAME = "username";
export const AVATAR = "avatar";
export const USERID = "userId";
export const EMAIL = "email";
export const TOKEN = "token";

export const MJX_DATA_FORMULA = "data-formula";
export const MJX_DATA_FORMULA_TYPE = "data-formula-type";

export const CONTENT = "content";
export const STYLE = "style";
export const TEMPLATE_NUM = "template_num";
export const CODE_NUM = "code_num";
export const THEME_LIST = "theme_list";
export const PREVIEW_TYPE = "preview_type";
export const IS_SYNC_SCROLL = "is_sync_scroll";
export const IS_CONTAIN_IMG_NAME = "is_contain_img_name";
export const IS_MAC_CODE = "is_mac_code";
export const NEWEST_VERSION = "newest_version";
export const ALIOSS_IMAGE_HOSTING = "alioss_image_hosting";
export const QINIUOSS_IMAGE_HOSTING = "qiniuoss_image_hosting";
export const IMAGE_HOSTING_TYPE = "image_hosting_type";
export const BASIC_THEME_ID = "basic-theme";
export const CODE_THEME_ID = "code-theme";
export const MARKDOWN_THEME_ID = "markdown-theme";
export const FONT_THEME_ID = "font-theme";
export const LAYOUT_ID = "nice";
export const BOX_ID = "nice-rich-text-box";
export const IMAGE_HOSTING_NAMES = {
  smms: "SM.MS",
  aliyun: "阿里云",
  qiniuyun: "七牛云",
};

export const RIGHT_SYMBOL = "✔️";
export const EXPORT_FILENAME_SUFFIX = ".md";

export const STYLE_LABELS = ["basic-theme", "markdown-theme", "code-theme", "font-theme"];

export const ENTER_DELAY = 0.5;
export const LEAVE_DELAY = 0.0;

export const CODE_OPTIONS = [
  {
    id: "wechat",
    name: "微信代码主题",
  },
  {
    id: "atomOneDark",
    macId: "macAtomOneDark",
    name: "atom-one-dark",
  },
  {
    id: "atomOneLight",
    macId: "macAtomOneLight",
    name: "atom-one-light",
  },
  {
    id: "monokai",
    macId: "macMonokai",
    name: "monokai",
  },
  {
    id: "github",
    macId: "macGithub",
    name: "github",
  },
  {
    id: "vs2015",
    macId: "macVs2015",
    name: "vs2015",
  },
  {
    id: "xcode",
    macId: "macXcode",
    name: "xcode",
  },
];

export const SITDOWN_OPTIONS = [
  {
    key: "default",
    value: "默认引擎",
    desc: "默认引擎",
  },
  {
    key: "wechat",
    value: "微信公众号 - https://mp.weixin.qq.com/",
    desc: "微信引擎",
  },
  {
    key: "zhihu",
    value: "知乎专栏 - https://zhuanlan.zhihu.com/",
    desc: "知乎引擎",
  },
  {
    key: "juejin",
    value: "掘金 - https://juejin.im/post/",
    desc: "掘金引擎",
  },
  {
    key: "csdn",
    value: "CSDN - https://blog.csdn.net/",
    desc: "CSDN引擎",
  },
];

export const THEME_API = () => {
  const currentPage = 0;
  const pageSize = 17;
  const checked = true;
  const order = "ASC";
  return `https://api.mdnice.com/themes?currentPage=${currentPage}&pageSize=${pageSize}&checked=${checked}&order=${order}`;
};

export const THEME_DATA = {
  success: true,
  code: 0,
  message: "操作成功！",
  data: {
    themeList: [
      {
        themeId: 1,
        name: "橙心",
        cover: "https://imgkr.cn-bj.ufileos.com/f2bf73a5-d12c-4505-9fbc-fcf2e5c5ec0e.png",
        css:
          '/* 全局属性\n * 页边距 padding: 30px;\n * 全文字体 font-family: ptima-Regular;\n * 英文换行 word-break: break-all;\n */\n#nice {\n}\n/* 段落，下方未标注标签参数均同此处\n * 上边距 margin-top: 5px;\n * 下边距 margin-bottom: 5px;\n * 行高 line-height: 26px;\n * 词间距 word-spacing: 3px;\n * 字间距 letter-spacing: 3px;\n * 对齐 text-align: left;\n * 颜色 color: #3e3e3e;\n * 字体大小 font-size: 16px;\n * 首行缩进 text-indent: 2em;\n */\n#nice p {\n}\n/* 一级标题 */\n#nice h1 {\n}\n/* 一级标题内容 */\n#nice h1 .content {\n}\n/* 一级标题修饰 请参考有实例的主题 */\n#nice h1:after {\n}\n/* 二级标题 */\n#nice h2 {\n border-bottom: 2px solid rgb(239, 112, 96);\n font-size: 1.3em;\n}\n/* 二级标题内容 */\n#nice h2 .content {\n display: inline-block;\n font-weight: bold;\n background: rgb(239, 112, 96);\n color: #ffffff;\n padding: 3px 10px 1px;\n border-top-right-radius: 3px;\n border-top-left-radius: 3px;\n margin-right: 3px;\n}\n/* 二级标题修饰 请参考有实例的主题 */\n#nice h2:after {\n display: inline-block;\n content: " ";\n vertical-align: bottom;\n border-bottom: 36px solid #efebe9;\n border-right: 20px solid transparent;\n}\n/* 三级标题 */\n#nice h3 {\n}\n/* 三级标题内容 */\n#nice h3 .content {\n}\n/* 三级标题修饰 请参考有实例的主题 */\n#nice h3:after {\n}\n/* 无序列表整体样式\n * list-style-type: square|circle|disc;\n */\n#nice ul {\n}\n/* 有序列表整体样式\n * list-style-type: upper-roman|lower-greek|lower-alpha;\n */\n#nice ol {\n}\n/* 列表内容，不要设置li\n */\n#nice li section {\n}\n/* 引用\n * 左边缘颜色 border-left-color: black;\n * 背景色 background: gray;\n */\n#nice blockquote {\n border-left-color: rgb(239, 112, 96);\n background: #fff9f9;\n}\n/* 引用文字 */\n#nice blockquote p {\n}\n/* 链接 \n * border-bottom: 1px solid #009688;\n */\n#nice a {\n color: rgb(239, 112, 96);\n border-bottom: 1px solid rgb(239, 112, 96);\n}\n/* 加粗 */\n#nice strong {\n}\n/* 斜体 */\n#nice em {\n}\n/* 加粗斜体 */\n#nice em strong {\n}\n/* 删除线 */\n#nice del {\n}\n/* 分隔线\n * 粗细、样式和颜色\n * border-top: 1px solid #3e3e3e;\n */\n#nice hr {\n}\n/* 图片\n * 宽度 width: 80%;\n * 居中 margin: 0 auto;\n * 居左 margin: 0 0;\n */\n#nice img {\n}\n/* 图片描述文字 */\n#nice figcaption {\n}\n/* 行内代码 */\n#nice p code, #nice li code {\n color: rgb(239, 112, 96);\n}\n/* 非微信代码块\n * 代码块不换行 display: -webkit-box !important;\n * 代码块换行 display: block;\n */\n#nice pre code {\n}\n/*\n * 表格内的单元格\n * 字体大小 font-size: 16px;\n * 边框 border: 1px solid #ccc;\n * 内边距 padding: 5px 10px;\n */\n#nice table tr th,\n#nice table tr td {\n}\n/* 脚注文字 */\n#nice .footnote-word {\n color: #ff3502;\n}\n/* 脚注上标 */\n#nice .footnote-ref {\n color: rgb(239, 112, 96);\n}\n/* "参考资料"四个字 \n * 内容 content: "参考资料";\n */\n#nice .footnotes-sep:before {\n}\n/* 参考资料编号 */\n#nice .footnote-num {\n}\n/* 参考资料文字 */\n#nice .footnote-item p { \n}\n/* 参考资料解释 */\n#nice .footnote-item p em {\n}\n/* 行间公式\n * 最大宽度 max-width: 300% !important;\n */\n#nice .block-equation svg {\n}\n/* 行内公式\n */\n#nice .inline-equation svg { \n}',
        article: "https://mp.weixin.qq.com/s/kiTKfif6B2GFZTOd0nM7qw",
        html: null,
        exampleHtml: null,
        authorName: "zhning12",
        authorId: null,
        description: "橙心的作者很懒，暂时没有描述",
        checked: true,
        userThemeId: null,
        createTime: "2020-04-04T09:57:55.000+0000",
        updateTime: "2020-04-04T23:10:09.000+0000",
      },
      {
        themeId: 2,
        name: "墨黑",
        cover: "https://imgkr.cn-bj.ufileos.com/1cbff769-8948-41ed-b9c9-d1ea989514f0.png",
        css:
          '/* 全局属性\n * 页边距 padding: 30px;\n * 全文字体 font-family: ptima-Regular;\n * 英文换行 word-break: break-all;\n */\n#nice {\n}\n/* 段落，下方未标注标签参数均同此处\n * 上边距 margin-top: 5px;\n * 下边距 margin-bottom: 5px;\n * 行高 line-height: 26px;\n * 对齐 text-align: left;\n * 颜色 color: #3e3e3e;\n * 字体大小 font-size: 16px;\n * 首行缩进 text-indent: 2em;\n */\n#nice p {\n font-size: 17px;\n word-spacing: 3px;\n letter-spacing: 1px\n}\n/* 一级标题 */\n#nice h1 {\n}\n/* 一级标题内容 */\n#nice h1 .content {\n}\n/* 一级标题修饰 请参考有实例的主题 */\n#nice h1:after {\n}\n/* 二级标题 */\n#nice h2 {\n}\n/* 二级标题内容 */\n#nice h2 .content {\n background-color: #5c5c5c;\n color: white;\n padding: 5px 15px;\n border-radius: 1px;\n}\n/* 二级标题修饰 请参考有实例的主题 */\n#nice h2:after {\n}\n/* 三级标题 */\n#nice h3 {\n}\n/* 三级标题内容 */\n#nice h3 .content {\n}\n/* 三级标题修饰 请参考有实例的主题 */\n#nice h3:after {\n}\n/* 无序列表整体样式\n * list-style-type: square|circle|disc;\n */\n#nice ul {\n}\n/* 有序列表整体样式\n * list-style-type: upper-roman|lower-greek|lower-alpha;\n */\n#nice ol {\n}\n/* 列表内容，不要设置li\n */\n#nice li section {\n}\n/* 引用\n* 左边缘颜色 border-left-color: black;\n* 背景色 background: gray;\n*/\n#nice blockquote {\n}\n/* 引用文字 */\n#nice blockquote p {\n}\n/* 链接 \n * border-bottom: 1px solid #009688;\n */\n#nice a {\n}\n/* 加粗 */\n#nice strong {\n}\n/* 斜体 */\n#nice em {\n}\n/* 加粗斜体 */\n#nice em strong {\n}\n/* 删除线 */\n#nice del { \n}\n/* 分隔线\n* 粗细、样式和颜色\n* border-top: 1px solid #3e3e3e;\n*/\n#nice hr {\n border-top: 1px dashed #dddddd;\n}\n/* 图片\n* 宽度 width: 80%;\n* 居中 margin: 0 auto;\n* 居左 margin: 0 0;\n*/\n#nice img {\n border-radius: 5px;\n}\n/* 图片描述文字 */\n#nice figcaption {\n}\n/* 行内代码 */\n#nice p code, #nice li code {\n}\n/* 非微信代码块\n * 代码块不换行 display: -webkit-box !important;\n * 代码块换行 display: block;\n */\n#nice pre code {\n}\n/*\n * 表格内的单元格\n * 字体大小 font-size: 16px;\n * 边框 border: 1px solid #ccc;\n * 内边距 padding: 5px 10px;\n */\n#nice table tr th,\n#nice table tr td {\n}\n/* 脚注文字 */\n#nice .footnote-word {\n}\n/* 脚注上标 */\n#nice .footnote-ref {\n}\n/* "参考资料"四个字 \n * 内容 content: "参考资料";\n */\n#nice .footnotes-sep:before {\n}\n/* 参考资料编号 */\n#nice .footnote-num {\n}\n/* 参考资料文字 */\n#nice .footnote-item p { \n}\n/* 参考资料解释 */\n#nice .footnote-item p em {\n}\n/* 行间公式\n * 最大宽度 max-width: 300% !important;\n */\n#nice .block-equation svg {\n}\n/* 行内公式\n */\n#nice .inline-equation svg { \n}',
        article: null,
        html: null,
        exampleHtml: null,
        authorName: "Mayandev",
        authorId: null,
        description: "墨黑的作者很懒，暂时没有描述",
        checked: true,
        userThemeId: null,
        createTime: "2020-04-04T12:13:42.000+0000",
        updateTime: "2020-04-04T23:10:12.000+0000",
      },
      {
        themeId: 3,
        name: "姹紫",
        cover: "https://imgkr.cn-bj.ufileos.com/de856a33-404c-45fb-be3d-ece5ad807512.png",
        css:
          '/* 全局属性\n * 页边距 padding: 30px;\n * 全文字体 font-family: ptima-Regular;\n * 英文换行 word-break: break-all;\n */\n#nice {\n font-size: 15px;\n letter-spacing: 0.05em;\n color:#595959\n}\n\n/* 段落，下方未标注标签参数均同此处\n * 上边距 margin-top: 5px;\n * 下边距 margin-bottom: 5px;\n * 行高 line-height: 26px;\n * 词间距 word-spacing: 3px;\n * 字间距 letter-spacing: 3px;\n * 对齐 text-align: left;\n * 颜色 color: #3e3e3e;\n * 字体大小 font-size: 16px;\n * 首行缩进 text-indent: 2em;\n */\n#nice p {\n margin: 1em 4px;\n}\n\n/* 一级标题 */\n#nice h1 {\n margin: 1.2em 0 1em;\n padding: 0;\n font-weight: bold;\n color:#773098;\n}\n\n/* 一级标题内容 */\n#nice h1 .content {\n}\n\n/* 一级标题修饰 请参考有实例的主题 */\n#nice h1:after {\n}\n\n/* 二级标题 */\n#nice h2 {\n min-height: 32px;\n line-height: 28px;\n border-bottom: solid 1px #000000;\n color: #773098;\n display: inline-block;\n border-bottom-width: 1px;\n border-bottom-style: solid;\n border-color: #773098;\n padding-top: 5px;\n padding-right: 0.5em;\n padding-left: 0.5em;\n margin-bottom: -3px;\n font-size: 22px;\n margin:1em auto;\n padding: 0.5em 0;\n text-align: center;\n width: 85%;\n font-weight: bold;\n display: flex;\n flex-direction: column;\n justify-content: center;\n}\n\n/* 二级标题内容 */\n#nice h2 .content {\n}\n\n/* 二级标题修饰 请参考有实例的主题 */\n#nice h2:after {\n}\n\n/* 三级标题 */\n#nice h3 {\n margin: 1.2em 0 1em;\n padding: 0;\n font-weight: bold;\n color:#773098;\n}\n\n/* 三级标题内容 */\n#nice h3 .content {\n}\n\n/* 三级标题修饰 请参考有实例的主题 */\n#nice h3:after {\n}\n\n/* 无序列表整体样式\n * list-style-type: square|circle|disc;\n */\n#nice ul {\n}\n\n/* 有序列表整体样式\n * list-style-type: upper-roman|lower-greek|lower-alpha;\n */\n#nice ol {\n}\n\n/* 列表内容，不要设置li\n */\n#nice li section {\n margin: 10px 0;\n}\n\n/* 引用\n * 左边缘颜色 border-left-color: black;\n * 背景色 background: gray;\n */\n#nice blockquote {\n margin: 10px 5px;\n border-left: 3px solid #9654B5;\n border-right: 1px solid #9654B5;\n color: #616161;\n quotes: none;\n background:#FBF9FD\n}\n\n/* 引用文字 */\n#nice blockquote p {\n}\n\n/* 链接 \n * border-bottom: 1px solid #009688;\n */\n#nice a {\n color: #773098;\n border-bottom: 1px solid #773098;\n}\n\n/* 加粗 */\n#nice strong {\n color:#773098;\n}\n\n/* 斜体 */\n#nice em {\n}\n\n/* 加粗斜体 */\n#nice em strong {\n}\n\n/* 删除线 */\n#nice del {\n}\n\n/* 分隔线\n* 粗细、样式和颜色\n* border-top: 1px solid #3e3e3e;\n*/\n#nice hr {\n border: 1px solid #773098;\n margin: 1.5em auto;\n}\n\n/* 图片\n* 宽度 width: 80%;\n* 居中 margin: 0 auto;\n* 居左 margin: 0 0;\n*/\n#nice img {\n}\n\n/* 行内代码 */\n#nice p code, #nice li code {\n color: #9654B5;\n}\n\n/* 非微信代码块\n * 代码块不换行 display: -webkit-box !important;\n * 代码块换行 display: block;\n */\n#nice pre code {\n}\n\n/*\n * 表格内的单元格\n * 字体大小 font-size: 16px;\n * 边框 border: 1px solid #ccc;\n * 内边距 padding: 5px 10px;\n */\n#nice table tr th,\n#nice table tr td {\n}\n\n/* 脚注文字 */\n#nice .footnote-word {\n color: #773098;\n}\n\n/* 脚注上标 */\n#nice .footnote-ref {\n color: #773098;\n}\n\n/* "参考资料"四个字 \n * 内容 content: "参考资料";\n */\n#nice .footnotes-sep:before {\n}\n\n/* 参考资料编号 */\n#nice .footnote-num {\n}\n\n/* 参考资料文字 */\n#nice .footnote-item p { \n}\n\n/* 参考资料解释 */\n#nice .footnote-item p em {\n}\n\n/* 行间公式\n * 最大宽度 max-width: 300% !important;\n */\n#nice .block-equation svg {\n}\n\n/* 行内公式\n */\n#nice .inline-equation svg { \n}',
        article: null,
        html: null,
        exampleHtml: null,
        authorName: "djmaxwow",
        authorId: null,
        description: "姹紫的作者很懒，暂时没有描述",
        checked: true,
        userThemeId: null,
        createTime: "2020-04-04T12:14:00.000+0000",
        updateTime: "2020-04-04T23:10:15.000+0000",
      },
      {
        themeId: 4,
        name: "嫩青",
        cover: "https://imgkr.cn-bj.ufileos.com/c1f12161-f4c7-4207-83b0-e52daec05e54.png",
        css:
          '/* 全局属性\n * 页边距 padding: 30px;\n * 全文字体 font-family: ptima-Regular;\n * 英文换行 word-break: break-all;\n */\n#nice {\n}\n\n/* 段落，下方未标注标签参数均同此处\n * 上边距 margin-top: 5px;\n * 下边距 margin-bottom: 5px;\n * 行高 line-height: 26px;\n * 词间距 word-spacing: 3px;\n * 字间距 letter-spacing: 3px;\n * 对齐 text-align: left;\n * 颜色 color: #3e3e3e;\n * 字体大小 font-size: 16px;\n * 首行缩进 text-indent: 2em;\n */\n#nice p {\n color: rgb(89,89,89);\n}\n\n/* 一级标题 */\n#nice h1 {\n color: rgb(89,89,89);\n}\n\n/* 一级标题内容 */\n#nice h1 .content {\n}\n\n/* 一级标题修饰 请参考有实例的主题 */\n#nice h1:after {\n}\n\n/* 二级标题 */\n#nice h2 {\n border-bottom: 2px solid rgb(89,89,89);\n margin-bottom: 30px;\n color: rgb(89,89,89);\n}\n\n/* 二级标题内容 */\n#nice h2 .content {\n font-size: 22px;\n display: inline-block;\n border-bottom: 2px solid rgb(89,89,89);\n}\n\n/* 二级标题修饰 请参考有实例的主题 */\n#nice h2:after {\n}\n\n/* 三级标题 */\n#nice h3 {\n color: rgb(89,89,89);\n}\n\n/* 三级标题内容 */\n#nice h3 .content {\n}\n\n/* 三级标题修饰 请参考有实例的主题 */\n#nice h3:after {\n}\n\n/* 无序列表整体样式\n * list-style-type: square|circle|disc;\n */\n#nice ul {\n}\n\n/* 有序列表整体样式\n * list-style-type: upper-roman|lower-greek|lower-alpha;\n */\n#nice ol {\n}\n\n/* 列表内容，不要设置li\n */\n#nice li section {\n}\n\n/* 引用\n* 左边缘颜色 border-left-color: black;\n* 背景色 background: gray;\n*/\n#nice blockquote {\n font-style: normal;\n padding: 10px;\n position: relative;\n line-height: 1.8;\n text-indent: 0;\n border: none;\n color: #888;\n}\n\n#nice blockquote:before {\n content: "“";\n display: inline;\n color: #555555;\n font-size: 4em;\n font-family: Arial, serif;\n line-height: 1em;\n font-weight: 700;\n}\n\n/* 引用文字 */\n#nice blockquote p {\n display: inline;\n}\n\n/* 链接 \n * border-bottom: 1px solid #009688;\n */\n#nice a {\n color: rgb(71, 193, 168);\n border-bottom: 1px solid rgb(71, 193, 168);\n}\n\n/* 加粗 */\n#nice strong {\n color: rgb(71, 193, 168);\n}\n\n/* 斜体 */\n#nice em {\n color: rgb(71, 193, 168);\n}\n\n/* 加粗斜体 */\n#nice em strong {\n color: rgb(71, 193, 168);\n}\n\n/* 删除线 */\n#nice del {\n}\n\n/* 分隔线\n* 粗细、样式和颜色\n* border-top: 1px solid #3e3e3e;\n*/\n#nice hr {\n}\n\n/* 图片\n* 宽度 width: 80%;\n* 居中 margin: 0 auto;\n* 居左 margin: 0 0;\n*/\n#nice img {\n}\n\n/* 图片描述文字 */\n#nice figcaption {\n}\n\n/* 行内代码 */\n#nice p code, #nice li code {\n color: rgb(71, 193, 168);\n}\n\n/* 非微信代码块\n * 代码块不换行 display: -webkit-box !important;\n * 代码块换行 display: block;\n */\n#nice pre code {\n}\n\n/*\n * 表格内的单元格\n * 字体大小 font-size: 16px;\n * 边框 border: 1px solid #ccc;\n * 内边距 padding: 5px 10px;\n */\n#nice table tr th,\n#nice table tr td {\n}\n\n/* 脚注文字 */\n#nice .footnote-word {\n color: rgb(71, 193, 168);\n}\n\n/* 脚注上标 */\n#nice .footnote-ref {\n color: rgb(71, 193, 168);\n}\n\n#nice .footnote-item em {\n color: black;\n}\n\n/* "参考资料"四个字 \n * 内容 content: "参考资料";\n */\n#nice .footnotes-sep:before {\n}\n\n/* 参考资料编号 */\n#nice .footnote-num {\n}\n\n/* 参考资料文字 */\n#nice .footnote-item p { \n}\n\n/* 参考资料解释 */\n#nice .footnote-item p em {\n}\n\n/* 行间公式\n * 最大宽度 max-width: 300% !important;\n */\n#nice .block-equation svg {\n}\n\n/* 行内公式\n */\n#nice .inline-equation svg { \n}',
        article: null,
        html: null,
        exampleHtml: null,
        authorName: "画手",
        authorId: null,
        description: "嫩青的作者很懒，暂时没有描述",
        checked: true,
        userThemeId: null,
        createTime: "2020-04-04T12:14:06.000+0000",
        updateTime: "2020-04-04T23:10:17.000+0000",
      },
      {
        themeId: 5,
        name: "绿意",
        cover: "https://imgkr.cn-bj.ufileos.com/73a97ac4-bb66-493b-97c2-9afd98e33be3.png",
        css:
          '/* 全局属性\n * 页边距 padding: 30px;\n * 全文字体 font-family: ptima-Regular;\n * 英文换行 word-break: break-all;\n */\n#nice {\n font-size: 15px;\n letter-spacing: 0.05em;\n color:#595959\n}\n\n/* 段落，下方未标注标签参数均同此处\n * 上边距 margin-top: 5px;\n * 下边距 margin-bottom: 5px;\n * 行高 line-height: 26px;\n * 词间距 word-spacing: 3px;\n * 字间距 letter-spacing: 3px;\n * 对齐 text-align: left;\n * 颜色 color: #3e3e3e;\n * 字体大小 font-size: 16px;\n * 首行缩进 text-indent: 2em;\n */\n#nice p {\n margin: 1em 4px;\n}\n\n/* 一级标题 */\n#nice h1 {\n margin: 1.2em 0 1em;\n padding: 0;\n font-weight: bold;\n color:#35b378;\n}\n\n/* 一级标题内容 */\n#nice h1 .content {\n}\n\n/* 一级标题修饰 请参考有实例的主题 */\n#nice h1:after {\n}\n\n/* 二级标题 */\n#nice h2 {\n bmin-height: 32px;\n line-height: 32px;\n border-bottom: solid 1px #000000;\n color: #35b378;\n display: inline-block;\n border-bottom-width: 0px;\n border-bottom-style: solid;\n border-color: #35b378;\n padding-top: 5px;\n padding-right: 0.5em;\n padding-left: 0.5em;\n font-size: 23px;\n margin: 1em 0 0rem 0;\n padding: 0.5em 0;\n text-align: leftt;\n font-weight: bold;\n}\n\n/* 二级标题内容 */\n#nice h2 .content {\n}\n\n/* 二级标题修饰 请参考有实例的主题 */\n#nice h2:after {\n}\n\n/* 三级标题 */\n#nice h3 {\n margin: 1.2em 0 1em;\n padding: 0;\n font-weight: bold;\n color: #35b378;\n}\n\n/* 三级标题内容 */\n#nice h3 .content {\n}\n\n/* 三级标题修饰 请参考有实例的主题 */\n#nice h3:after {\n}\n\n/* 无序列表整体样式\n * list-style-type: square|circle|disc;\n */\n#nice ul {\n}\n\n/* 有序列表整体样式\n * list-style-type: upper-roman|lower-greek|lower-alpha;\n */\n#nice ol {\n}\n\n/* 列表内容，不要设置li\n */\n#nice li section {\n margin: 10px 0;\n}\n\n/* 引用\n * 左边缘颜色 border-left-color: black;\n * 背景色 background: gray;\n */\n#nice blockquote {\n margin: 10px 5px;\n border-left: 3px solid #35b378;\n border-right: 0px solid #35b378;\n color: #616161;\n quotes: none;\n background: #FBF9FD\n}\n\n/* 引用文字 */\n#nice blockquote p {\n}\n\n/* 链接 \n * border-bottom: 1px solid #009688;\n */\n#nice a {\n color: #35b378;\n border-bottom: 1px solid #35b378;\n}\n\n/* 加粗 */\n#nice strong {\n color:#35b378;\n}\n\n/* 斜体 */\n#nice em {\n}\n\n/* 加粗斜体 */\n#nice em strong {\n}\n\n/* 删除线 */\n#nice del {\n}\n\n/* 分隔线\n * 粗细、样式和颜色\n * border-top: 1px solid #3e3e3e;\n */\n#nice hr {\n border: 1px solid #35b378;\n margin: 1.5em auto;\n}\n\n/* 图片\n * 宽度 width: 80%;\n * 居中 margin: 0 auto;\n * 居左 margin: 0 0;\n */\n#nice img {\n}\n\n/* 图片描述文字 */\n#nice figcaption {\n}\n\n/* 行内代码 */\n#nice p code, #nice li code {\n color: #35b378;\n}\n\n/* 非微信代码块\n * 代码块不换行 display: -webkit-box !important;\n * 代码块换行 display: block;\n */\n#nice pre code {\n}\n\n/*\n * 表格内的单元格\n * 字体大小 font-size: 16px;\n * 边框 border: 1px solid #ccc;\n * 内边距 padding: 5px 10px;\n */\n#nice table tr th,\n#nice table tr td {\n}\n\n/* 脚注文字 */\n#nice .footnote-word {\n color: #35b378;\n}\n\n/* 脚注上标 */\n#nice .footnote-ref {\n color: #35b378;\n}\n\n/* "参考资料"四个字 \n * 内容 content: "参考资料";\n */\n#nice .footnotes-sep:before {\n}\n\n/* 参考资料编号 */\n#nice .footnote-num {\n}\n\n/* 参考资料文字 */\n#nice .footnote-item p { \n}\n\n/* 参考资料解释 */\n#nice .footnote-item p em {\n}\n\n/* 行间公式\n * 最大宽度 max-width: 300% !important;\n */\n#nice .block-equation svg {\n}\n\n/* 行内公式\n */\n#nice .inline-equation svg { \n}',
        article: "https://mp.weixin.qq.com/s/gpancJ62Dkd4ccXzFg2g5Q",
        html: null,
        exampleHtml: null,
        authorName: "夜尽天明",
        authorId: null,
        description: "绿意的作者很懒，暂时没有描述",
        checked: true,
        userThemeId: null,
        createTime: "2020-04-04T12:14:12.000+0000",
        updateTime: "2020-04-04T23:10:19.000+0000",
      },
      {
        themeId: 6,
        name: "红绯",
        cover: "https://imgkr.cn-bj.ufileos.com/5b42e631-819f-4b9f-8b3d-551c31a3cf71.png",
        css:
          '/* 全局属性\n * 页边距 padding:30px;\n * 全文字体 font-family:ptima-Regular;\n * 英文换行 word-break:break-all;\n */\n#nice {\n font-family:PingFangSC-Light;\n}\n\n/* 段落，下方未标注标签参数均同此处\n * 上边距 margin-top:5px;\n * 下边距 margin-bottom:5px;\n * 行高 line-height:26px;\n * 词间距 word-spacing:3px;\n * 字间距 letter-spacing:3px;\n * 对齐 text-align:left;\n * 颜色 color:#3e3e3e;\n * 字体大小 font-size:16px;\n * 首行缩进 text-indent:2em;\n */\n#nice p {\n margin:10px 10px;\n line-height:1.75;\n letter-spacing:0.2em;\n font-size:14px;\n word-spacing:0.1em;\n}\n\n/* 一级标题 */\n#nice h1 {\n border-bottom:2px solid rgb(248,57,41);\n font-size:1.3em;\n}\n\n/* 一级标题内容 */\n#nice h1 .content {\n display:inline-block;\n font-weight:normal;\n background:rgb(248,57,41);\n color:#ffffff;\n padding:3px 10px 1px;\n border-top-right-radius:3px;\n border-top-left-radius:3px;\n margin-right:3px;\n}\n\n/* 一级标题修饰 请参考有实例的主题 */\n#nice h1:after {\n}\n \n/* 二级标题 */\n#nice h2 {\n text-align:left;\n margin:20px 10px 0px 0px;\n}\n\n/* 二级标题内容 */\n#nice h2 .content {\n font-family:STHeitiSC-Light;\n font-size:18px;\n font-weight:bolder;\n display:inline-block;\n padding-left:10px;\n border-left:5px solid rgb(248,57,41);\n}\n\n/* 二级标题修饰 请参考有实例的主题 */\n#nice h2:after {\n}\n\n/* 三级标题 */\n#nice h3 {\n}\n\n/* 三级标题内容 */\n#nice h3 .content {\n font-size:14px;\n color:rgb(165,213,93);\n}\n\n/* 三级标题修饰 请参考有实例的主题 */\n#nice h3:after {\n}\n\n/* 无序列表整体样式\n * list-style-type: square|circle|disc;\n */\n#nice ul {\n font-size: 14px;\n}\n\n/* 有序列表整体样式\n * list-style-type: upper-roman|lower-greek|lower-alpha;\n */\n#nice ol {\n font-size: 14px;\n}\n\n/* 列表内容，不要设置li\n */\n#nice li section {\n font-size:13px;\n}\n\n/* 引用\n * 左边缘颜色 border-left-color:black;\n * 背景色 background:gray;\n */\n#nice blockquote {\n font-style:normal;\n border-left:none;\n padding:10px;\n position:relative;\n line-height:1.8;\n border-radius:0px 0px 10px 10px;\n color:#FEEEED;\n background:#000;\n box-shadow:#84A1A8 0px 10px 15px;\n}\n#nice blockquote:before {\n content:" ";\n display:inline;\n color:#FFF;\n font-size:4em;\n font-family:Arial,serif;\n line-height:1em;\n font-weight:700;\n}\n\n/* 引用文字 */\n#nice blockquote p {\n color:#FEEEED;\n font-size:13px;\n display:inline;\n}\n#nice blockquote:after {\n content:"”";\n float:right;\n display:inline;\n color:#FFF;\n font-size:3em;\n line-height:1em;\n font-weight:500;\n}\n\n/* 链接 \n * border-bottom: 1px solid #009688;\n */\n#nice a {\n color:rgb(248,57,41);\n border-bottom: 1px solid #ff3502;\n font-family:STHeitiSC-Light;\n}\n\n/* 加粗 */\n#nice strong {\n font-weight:border;\n color:rgb(248,57,41);\n}\n\n/* 斜体 */\n#nice em {\n color:rgb(248,57,41);\n letter-spacing:0.3em;\n}\n\n/* 加粗斜体 */\n#nice em strong {\n color:rgb(248,57,41);\n letter-spacing:0.3em;\n}\n\n/* 删除线 */\n#nice del {\n}\n \n/* 分隔线\n * 粗细、样式和颜色\n * border-top:1px solid #3e3e3e;\n */\n#nice hr {\n height:1px;\n padding:0;\n border:none;\n border-top:medium solidid #333;\n text-align:center;\n background-image:linear-gradient(to right,rgba(248,57,41,0),rgba(248,57,41,0.75),rgba(248,57,41,0));\n}\n\n/* 图片\n * 宽度 width:80%;\n * 居中 margin:0 auto;\n * 居左 margin:0 0;\n */\n#nice img {\n border-radius:0px 0px 5px 5px;\n display:block;\n margin:20px auto;\n width:85%;\n height:100%;\n object-fit:contain;\n box-shadow:#84A1A8 0px 10px 15px;\n}\n\n/* 图片描述文字 */\n#nice figcaption {\n display:block;\n font-size:12px;\n font-family:PingFangSC-Light;\n}\n\n/* 行内代码 */\n#nice p code, #nice li code {\n color:rgb(271,93,108);\n}\n\n/* 非微信代码块\n * 代码块不换行 display:-webkit-box !important;\n * 代码块换行 display:block;\n */\n#nice pre code {\n}\n\n/*\n * 表格内的单元格\n * 字体大小 font-size: 16px;\n * 边框 border: 1px solid #ccc;\n * 内边距 padding: 5px 10px;\n */\n#nice table tr th,\n#nice table tr td {\n font-size: 14px;\n}\n\n/* 脚注文字 */\n#nice .footnote-word {\n color:rgb(248,57,41);\n}\n\n/* 脚注上标 */\n#nice .footnote-ref {\n color:rgb(248,57,41);\n}\n\n/*脚注链接样式*/\n#nice .footnote-item em {\n color:#6E1E51;\n font-size:12px;\n}\n\n/* "参考资料"四个字 \n * 内容 content: "参考资料";\n */\n#nice .footnotes-sep:before {\n}\n\n/* 参考资料编号 */\n#nice .footnote-num {\n}\n\n/* 参考资料文字 */\n#nice .footnote-item p { \n}\n\n/* 参考资料解释 */\n#nice .footnote-item p em {\n}\n\n/* 行间公式\n * 最大宽度 max-width: 300% !important;\n */\n#nice .block-equation svg {\n}\n\n/* 行内公式\n */\n#nice .inline-equation svg { \n}\n\n/* 滑动图片\n */\n#nice .imageflow-img {\n display: inline-block;\n width:100%;\n margin-bottom: 0;\n}',
        article: "https://mp.weixin.qq.com/s/DrvJBEWqH14atF_4O1IXFw",
        html: null,
        exampleHtml: null,
        authorName: "HeyRain",
        authorId: null,
        description: "红绯的作者很懒，暂时没有描述",
        checked: true,
        userThemeId: null,
        createTime: "2020-04-04T12:14:19.000+0000",
        updateTime: "2020-04-12T19:53:31.000+0000",
      },
      {
        themeId: 7,
        name: "WeChat-Format",
        cover: "https://imgkr.cn-bj.ufileos.com/9a21badd-0c35-4460-a064-63572166c757.png",
        css:
          '/* 全局属性\n * 页边距 padding: 30px;\n * 全文字体 font-family: ptima-Regular;\n * 英文换行 word-break: break-all;\n */\n#nice {\n}\n\n/* 段落，下方未标注标签参数均同此处\n * 上边距 margin-top: 5px;\n * 下边距 margin-bottom: 5px;\n * 行高 line-height: 26px;\n * 词间距 word-spacing: 3px;\n * 字间距 letter-spacing: 3px;\n * 对齐 text-align: left;\n * 颜色 color: #3e3e3e;\n * 字体大小 font-size: 16px;\n * 首行缩进 text-indent: 2em;\n */\n#nice p {\n line-height: 1.6;\n color: #3f3f3f;\n font-size: 16px;\n margin: 10px 0px;\n}\n\n/* 一级标题 */\n#nice h1 {\n}\n\n/* 一级标题内容 */\n#nice h1 .content {\n}\n\n/* 一级标题修饰 请参考有实例的主题 */\n#nice h1:after {\n}\n\n/* 二级标题 */\n#nice h2 {\n margin: 80px 10px 40px 10px;\n text-align: center;\n font-weight: normal;\n color: #3f3f3f;\n font-size: 140%;\n}\n\n/* 二级标题内容 */\n#nice h2 .content {\n}\n\n/* 二级标题修饰 请参考有实例的主题 */\n#nice h2:after {\n}\n\n/* 三级标题 */\n#nice h3 {\n margin: 40px 0px 20px 0px;\n font-weight: bold;\n line-height: 1.5;\n color: #3f3f3f;\n font-size: 120%;\n}\n\n/* 三级标题内容 */\n#nice h3 .content {\n}\n\n/* 三级标题修饰 请参考有实例的主题 */\n#nice h3:after {\n}\n\n/* 无序列表整体样式\n * list-style-type: square|circle|disc;\n */\n#nice ul {\n}\n\n/* 有序列表整体样式\n * list-style-type: upper-roman|lower-greek|lower-alpha;\n */\n#nice ol {\n}\n\n/* 列表内容，不要设置li\n */\n#nice li section {\n}\n\n/* 引用\n* 左边缘颜色 border-left-color: black;\n* 背景色 background: gray;\n*/\n#nice blockquote {\n color: rgb(91,91,91);\n border-left: 3px solid rgb(158,158,158);\n background: rgba(158, 158, 158, 0.1);\n padding: 1px 0 1px 10px;\n margin: 20px 0px;\n}\n\n/* 引用文字 */\n#nice blockquote p {\n color: #3f3f3f;\n line-height: 1.5;\n font-size: 16px;\n margin: 10px;\n padding: 0px;\n}\n\n/* 链接 \n * border-bottom: 1px solid #009688;\n */\n#nice a {\n color: #ff3502;\n border-bottom: 1px solid #ff3502;\n}\n\n/* 加粗 */\n#nice strong {\n color: #ff3502;\n line-height: 1.5;\n font-size: 16px;\n}\n\n/* 斜体 */\n#nice em {\n}\n\n/* 加粗斜体 */\n#nice em strong {\n}\n\n/* 删除线 */\n#nice del {\n}\n\n/* 分隔线\n* 粗细、样式和颜色\n* border-top: 1px solid #3e3e3e;\n*/\n#nice hr {\n}\n\n/* 图片\n* 宽度 width: 80%;\n* 居中 margin: 0 auto;\n* 居左 margin: 0 0;\n*/\n#nice img {\n}\n\n/* 图片描述文字 */\n#nice figcaption {\n}\n\n/* 行内代码 */\n#nice p code, #nice li code {\n background: #f8f5ec;\n color: #ff3502;\n line-height: 1.5;\n font-size: 90%;\n padding: 3px 5px;\n border-radius: 2px;\n}\n\n/* 非微信代码块\n * 代码块不换行 display: -webkit-box !important;\n * 代码块换行 display: block;\n */\n#nice pre code {\n}\n\n/*\n * 表格内的单元格\n * 字体大小 font-size: 16px;\n * 边框 border: 1px solid #ccc;\n * 内边距 padding: 5px 10px;\n */\n#nice table tr th,\n#nice table tr td {\n}\n\n/* 脚注文字 */\n#nice .footnote-word {\n color: #ff3502;\n font-size: 16px;\n line-height: 1.5;\n font-weight: normal;\n}\n\n/* 脚注上标 */\n#nice .footnote-ref {\n color: #ff3502;\n font-weight: normal;\n}\n\n/* "参考资料"四个字 */\n#nice .footnotes-sep {\n}\n\n/* 参考资料编号 */\n#nice .footnote-num {\n}\n\n/* 参考资料文字 */\n#nice .footnote-item p { \n}\n\n/* 参考资料解释 */\n#nice .footnote-item p em {\n}\n\n/* 行间公式\n * 最大宽度 max-width: 300% !important;\n */\n#nice .block-equation svg {\n}\n\n/* 行内公式\n */\n#nice .inline-equation svg { \n}',
        article: "https://mp.weixin.qq.com/s/e-ruRGkJFnMXVep61ilt2w",
        html: null,
        exampleHtml: null,
        authorName: "画手",
        authorId: null,
        description:
          "的作者很懒的作者很懒的作者很懒的作者很懒的作者很懒的作者很懒的作者很懒的作者很懒的作者很懒的作者很懒",
        checked: true,
        userThemeId: null,
        createTime: "2020-04-04T12:14:25.000+0000",
        updateTime: "2020-04-05T08:19:59.000+0000",
      },
      {
        themeId: 8,
        name: "蓝莹",
        cover: "https://imgkr.cn-bj.ufileos.com/852a62ad-29dd-4283-af53-081b075f8234.png",
        css:
          '/* 全局属性 */\n\n#nice {\n font-family: "PingFang SC", "Microsoft YaHei", sans-serif;\n word-break: break-all;\n}\n\n/* 标题 */\n#nice h1 {\n font-size: 1.7em;\n font-weight: normal;\n border-bottom: 2px solid hsl(216, 100%, 68%);\n}\n\n#nice h1 .content {\n background: hsl(216, 100%, 68%);\n color: white;\n padding: 3px 10px;\n border-top-right-radius: 3px;\n border-top-left-radius: 3px;\n margin-right: 3px;\n}\n\n#nice h2 {\n font-weight: normal;\n color: #333;\n font-size: 1.4em;\n border-bottom: 1px solid hsl(216, 100%, 68%);\n}\n\n#nice h2 .content {\n border-bottom: 1px solid hsl(216, 100%, 68%);\n}\n\n#nice h3 {\n font-weight: normal;\n color: #333;\n font-size: 1.2em;\n}\n\n/* 特殊规定：\n * h4 → 摘要\n * h5 → 强调\n * h6 → 序号\n * em → 高亮\n */\n\n#nice h4 {\n font-weight: normal;\n font-size: 1em;\n width: 80%;\n border: 1px solid hsl(216, 100%, 68%);\n border-top: 4px solid hsl(216, 100%, 68%);\n padding: 10px;\n margin: 30px auto;\n color: #333;\n}\n\n#nice h5 {\n font-weight: normal;\n font-size: 1.3em;\n text-align: center;\n background: hsl(216, 100%, 68%);\n border: 3px double #fff;\n width: 80%;\n padding: 10px;\n margin: 30px auto;\n color: #fff;\n}\n\n#nice h6 {\n font-size: 1.5em;\n font-weight: normal;\n color: hsl(216, 100%, 68%);\n border-bottom: 1px solid hsl(216, 100%, 68%);\n}\n\n#nice em {\n font-style: normal;\n font-weight: normal;\n color: white;\n background: hsl(244, 100%, 75%);\n padding: 2px 4px;\n\tmargin: 0px 2px;\n}\n\n/* 其他块元素 */\n\n#nice ol,\n#nice ul {\n padding-left: 2em;\n}\n\n#nice hr {\n width: 90%;\n margin: 1.5em auto;\n border-top: 2px dashed hsl(216, 100%, 68%);\n}\n\n#nice table {\n margin: 1.5em auto;\n width: auto;\n}\n\n#nice img {\n width: 90%;\n margin: 0 auto;\n box-shadow: #CCC 0 10px 15px;\n}\n\n#nice blockquote {\n background: #f9f9f9;\n border-left-color: hsl(216, 100%, 68%);\n}\n\n#nice blockquote p {\n color: #999;\n padding: 3px 0;\n}\n\n#nice a {\n color: hsl(187, 100%, 45%);\n font-weight: normal;\n border-bottom-color: hsl(187, 100%, 45%);\n}\n\n#nice strong {\n color: hsl(216, 80%, 44%);\n}\n\n#nice s,\n#nice del {\n color: #999;\n}\n\n#nice p,\n#nice li,\n#nice li span,\n#nice h4,\n#nice table tr td {\n color: #666;\n}\n\n#nice table tr th {\n color: #333;\n font-weight: normal;\n}\n\n#nice p code,\n#nice li code {\n color: hsl(216, 100%, 68%);\n}\n\n#nice sup {\n line-height: 0;\n}\n\n#nice .footnote-word,\n.footnote-ref {\n font-weight: normal;\n color: hsl(187, 100%, 45%);\n}\n\n#nice .footnotes-sep {\n font-family: inherit;\n}\n\n#nice .footnote-num {\n font-family: inherit;\n}\n\n#nice .footnote-item p {\n color: #666;\n}\n\n#nice .footnote-item p em {\n color: #999;\n background: transparent;\n}\n\n/* 行间公式\n * 最大宽度 max-width: 300% !important;\n */\n#nice .block-equation svg {\n}\n\n/* 行内公式\n */\n#nice .inline-equation svg { \n}\n\n/* 滑动图片\n */\n#nice .imageflow-img {\n display: inline-block;\n width:100%;\n margin-bottom: 0;\n}',
        article: "https://mp.weixin.qq.com/s/OfRQaBe3XVXXjE7f84nSwA",
        html: null,
        exampleHtml: null,
        authorName: "谭淞宸",
        authorId: null,
        description: "蓝莹的作者很懒，暂时没有描述",
        checked: true,
        userThemeId: null,
        createTime: "2020-04-04T12:14:33.000+0000",
        updateTime: "2020-04-12T19:54:14.000+0000",
      },
      {
        themeId: 9,
        name: "科技蓝",
        cover: "https://imgkr.cn-bj.ufileos.com/b169b2d1-d5ea-4603-9aca-88be65698767.png",
        css:
          '/*自定义样式，实时生效*/\n\n/* 全局属性\n * 页边距 padding:30px;\n * 全文字体 font-family:ptima-Regular;\n * 英文换行 word-break:break-all;\n */\n#nice {\n font-family:PingFangSC-Light;\n}\n\n/* 段落，下方未标注标签参数均同此处\n * 上边距 margin-top:5px;\n * 下边距 margin-bottom:5px;\n * 行高 line-height:26px;\n * 词间距 word-spacing:3px;\n * 字间距 letter-spacing:3px;\n * 对齐 text-align:left;\n * 颜色 color:#3e3e3e;\n * 字体大小 font-size:16px;\n * 首行缩进 text-indent:2em;\n */\n#nice p {\n margin:10px 10px;\n line-height:1.75;\n letter-spacing:0.2em;\n font-size: 15px;\n word-spacing:0.1em;\n}\n\n/* 一级标题 */\n#nice h1 {\n border-bottom: 2px solid #0e88eb;\n font-size: 1.4em;\n text-align: center;\n}\n\n/* 一级标题内容 */\n#nice h1 .content {\n font-size: 1.4em;\n display:inline-block;\n font-weight: bold;\n //background: #0e88eb;\n color:#ffffff;\n color: #0e88eb;\n padding:3px 10px 1px;\n border-top-right-radius:3px;\n border-top-left-radius:3px;\n margin-right:3px;\n}\n\n/* 一级标题修饰 请参考有实例的主题 */\n#nice h1:after {\n}\n \n/* 二级标题 */\n#nice h2 {\n text-align:left;\n margin:20px 10px 0px 0px;\n}\n\n/* 二级标题内容 */\n#nice h2 .content {\n font-family:STHeitiSC-Light;\n font-size: 22px;\n color:#0e88eb;\n font-weight:bolder;\n display:inline-block;\n padding-left:10px;\n border-left:5px solid #0e88eb;\n}\n\n/* 二级标题修饰 请参考有实例的主题 */\n#nice h2:after {\n}\n\n/* 三级标题 */\n#nice h3 {\n\tfont-size: 18px;\n \tcolor: #0e88eb;\n}\n\n/* 三级标题内容 */\n#nice h3 .content {\n font-size: 18px;\n color: #0e88eb;\n}\n\n/* 三级标题修饰 请参考有实例的主题 */\n#nice h3:after {\n}\n\n/* 无序列表整体样式\n * list-style-type: square|circle|disc;\n */\n#nice ul {\n}\n\n/* 有序列表整体样式\n * list-style-type: upper-roman|lower-greek|lower-alpha;\n */\n#nice ol {\n}\n\n/* 列表内容，不要设置li\n */\n#nice li section {\n font-size: 15px;\n}\n\n/* 引用\n * 左边缘颜色 border-left-color:black;\n * 背景色 background:gray;\n */\n#nice blockquote {\n font-style:normal;\n border-left:none;\n padding:10px;\n position:relative;\n line-height:1.8;\n border-radius:0px 0px 10px 10px;\n color: #0e88eb;\n background:#fff;\n box-shadow:#84A1A8 0px 10px 15px;\n}\n#nice blockquote:before {\n content:"★ ";\n display:inline;\n color: #0e88eb;\n font-size:4em;\n font-family:Arial,serif;\n line-height:1em;\n font-weight:700;\n}\n\n/* 引用文字 */\n#nice blockquote p {\n color: #0e88eb;\n font-size:15px;\n display:inline;\n}\n#nice blockquote:after {\n content:"”";\n float:right;\n display:inline;\n color:#0e88eb;\n font-size:3em;\n line-height:1em;\n font-weight:500;\n}\n\n/* 链接 \n * border-bottom: 1px solid #009688;\n */\n#nice a {\n color: #0e88eb;\n border-bottom: 0px solid #ff3502;\n font-family:STHeitiSC-Light;\n}\n\n/* 加粗 */\n#nice strong {\n font-weight: border;\n color: #0e88eb;\n}\n\n/* 斜体 */\n#nice em {\n color: #0e88eb;\n letter-spacing:0.3em;\n}\n\n/* 加粗斜体 */\n#nice em strong {\n color: #0e88eb;\n letter-spacing:0.3em;\n}\n\n/* 删除线 */\n#nice del {\n}\n \n/* 分隔线\n * 粗细、样式和颜色\n * border-top:1px solid #3e3e3e;\n */\n#nice hr {\n height:1px;\n padding:0;\n border:none;\n border-top:medium solidid #333;\n text-align:center;\n background-image:linear-gradient(to right,rgba(248,57,41,0),#0e88eb,rgba(248,57,41,0));\n}\n\n/* 图片\n * 宽度 width:80%;\n * 居中 margin:0 auto;\n * 居左 margin:0 0;\n */\n#nice img {\n border-radius:0px 0px 5px 5px;\n display:block;\n margin:20px auto;\n width:85%;\n height:100%;\n object-fit:contain;\n box-shadow:#84A1A8 0px 10px 15px;\n}\n\n/* 图片描述文字 */\n#nice figcaption {\n display:block;\n font-size:12px;\n font-family:PingFangSC-Light;\n}\n\n/* 行内代码 */\n#nice p code, #nice li code {\n color:/*自定义样式，实时生效*/\n}\n\n/* 非微信代码块\n * 代码块不换行 display:-webkit-box !important;\n * 代码块换行 display:block;\n */\n#nice pre code {\n}\n\n/*\n * 表格内的单元格\n * 字体大小 font-size: 16px;\n * 边框 border: 1px solid #ccc;\n * 内边距 padding: 5px 10px;\n */\n#nice table tr th,\n#nice table tr td {\n font-size: 15px;\n}\n\n/* 脚注文字 */\n#nice .footnote-word {\n color: #2d59b3;\n}\n\n/* 脚注上标 */\n#nice .footnote-ref {\n color: #6a88c5;\n}\n\n/* 非微信代码块\n * 代码块不换行 display:-webkit-box !important;\n * 代码块换行 display:block;\n */\n#nice pre code {\n}\n\n/* 脚注文字 */\n#nice .footnote-word {\n color: #0e88eb;\n}\n\n/* 脚注上标 */\n#nice .footnote-ref {\n color: #0e88eb;\n}\n\n/*脚注链接样式*/\n#nice .footnote-item em {\n color: #082a71;\n font-size:12px;\n}\n\n/* "参考资料"四个字 \n * 内容 content: "参考资料";\n */\n#nice .footnotes-sep:before {\n}\n\n/* 参考资料编号 */\n#nice .footnote-num {\n}\n\n/* 参考资料文字 */\n#nice .footnote-item p { \n}\n\n/* 参考资料解释 */\n#nice .footnote-item p em {\n}\n\n/* 行间公式\n * 最大宽度 max-width: 300% !important;\n */\n#nice .block-equation svg {\n}\n\n/* 行内公式\n */\n#nice .inline-equation svg { \n}\n\n/* 滑动图片\n */\n#nice .imageflow-img {\n display: inline-block;\n width:100%;\n margin-bottom: 0;\n}',
        article: "https://mp.weixin.qq.com/s/hEQA4GEFycBjvScko4DeqQ",
        html: null,
        exampleHtml: null,
        authorName: "夜尽天明",
        authorId: null,
        description: "科技蓝的作者很懒，暂时没有描述",
        checked: true,
        userThemeId: null,
        createTime: "2020-04-04T12:14:39.000+0000",
        updateTime: "2020-04-12T19:54:44.000+0000",
      },
      {
        themeId: 10,
        name: "兰青",
        cover: "https://imgkr.cn-bj.ufileos.com/b0b800e5-a6ec-4c67-9b97-2802a1a2bdb7.png",
        css:
          '/*自定义样式，实时生效*/\n\n/* 全局属性\n * 页边距 padding: 30px;\n * 全文字体 font-family: ptima-Regular;\n * 英文换行 word-break: break-all;\n */\n#nice {\n}\n\n/* 段落，下方未标注标签参数均同此处\n * 上边距 margin-top: 5px;\n * 下边距 margin-bottom: 5px;\n * 行高 line-height: 26px;\n * 词间距 word-spacing: 3px;\n * 字间距 letter-spacing: 3px;\n * 对齐 text-align: left;\n * 颜色 color: #3e3e3e;\n * 字体大小 font-size: 16px;\n * 首行缩进 text-indent: 2em;\n */\n#nice p {\n text-align: justify;\n}\n\n/* 一级标题 */\n#nice h1 {\n font-size: 1.8em;\n color: #009688;\n \tmargin: 1.2em auto;\n text-align: center;\n border-bottom: 1px solid #009688;\n}\n\n/* 一级标题内容 */\n#nice h1 .content {\n}\n\n/* 一级标题修饰 请参考有实例的主题 */\n#nice h1:after {\n}\n\n/* 二级标题 */\n#nice h2 {\n color: #009688;\n padding-left: 10px;\n margin: 1em auto;\n border-left: 3px solid #009688;\n}\n\n/* 二级标题内容 */\n#nice h2 .content {\n}\n\n/* 二级标题修饰 请参考有实例的主题 */\n#nice h2:after {\n}\n\n/* 三级标题 */\n#nice h3 {\n margin: 0.6em auto;\n padding-left: 10px;\n border-left: 2px solid #009688;\n}\n\n/* 三级标题内容 */\n#nice h3 .content {\n}\n\n/* 三级标题修饰 请参考有实例的主题 */\n#nice h3:after {\n}\n\n/* 四级标题 */\n#nice h4 {\n margin: 0.6em auto;\n font-size: 1.2em;\n padding-left: 10px;\n border-left: 2px dashed #009688;\n}\n\n/* 五级标题 */\n#nice h5 {\n margin: 0.6em auto;\n font-size: 1.1em;\n padding-left: 10px;\n border-left: 1px dashed #009688;\n}\n\n/* 六级标题 */\n#nice h6 {\n margin: 0.6em auto;\n font-size: 1em;\n padding-left: 10px;\n border-left: 1px dotted #009688;\n}\n\n/* 无序列表整体样式\n * list-style-type: square|circle|disc;\n */\n#nice ul {\n}\n\n/* 有序列表整体样式\n * list-style-type: upper-roman|lower-greek|lower-alpha;\n */\n#nice ol {\n}\n\n/* 列表内容，不要设置li\n */\n#nice li section {\n}\n\n/* 引用\n * 左边缘颜色 border-left-color: black;\n * 背景色 background: gray;\n */\n#nice blockquote {\n border-left: 2px solid #888;\n border-right: 2px solid #888;\n padding-left: 1em;\n color: #777;\n}\n\n/* 引用文字 */\n#nice blockquote p {\n}\n\n/* 链接 \n * border-bottom: 1px solid #009688;\n */\n#nice a {\n color: #009688;\n border-bottom: 1px solid #009688;\n}\n\n/* 加粗 */\n#nice strong {\n}\n\n/* 斜体 */\n#nice em {\n}\n\n/* 加粗斜体 */\n#nice em strong {\n}\n\n/* 删除线 */\n#nice del {\n}\n\n/* 分隔线\n * 粗细、样式和颜色\n * border-top: 1px solid #3e3e3e;\n */\n#nice hr {\n margin: 20px 0;\n}\n\n/* 图片\n * 宽度 width: 80%;\n * 居中 margin: 0 auto;\n * 居左 margin: 0 0;\n */\n#nice img {\n}\n\n/* 图片描述文字 */\n#nice figcaption {\n}\n\n/* 行内代码 */\n#nice p code, #nice li code {\n color: #009688;\n}\n\n/* 非微信代码块\n * 代码块不换行 display: -webkit-box !important;\n * 代码块换行 display: block;\n */\n#nice pre code {\n}\n\n/* 表格内的单元格\n * 字体大小 font-size: 16px;\n * 边框 border: 1px solid #ccc;\n * 内边距 padding: 5px 10px;\n */\n#nice table tr th {\n border: 1px solid #009688;\n background-color: #009688;\n color: #f8f8f8;\n border-bottom: 0;\n}\n\n#nice table tr td {\n border: 1px solid #009688;\n}\n\n#nice table tr:nth-child(2n) {\n background-color: #f8f8f8;\n}\n\n/* 脚注文字 */\n#nice .footnote-word {\n color: #009688;\n}\n\n/* 脚注上标 */\n#nice .footnote-ref {\n color: #009688;\n}\n\n/* "参考资料"四个字 \n * 内容 content: "参考资料";\n */\n#nice .footnotes-sep:before {\n}\n\n/* 参考资料编号 */\n#nice .footnote-num {\n}\n\n/* 参考资料文字 */\n#nice .footnote-item p { \n}\n\n/* 参考资料解释 */\n#nice .footnote-item p em {\n}\n\n/* 行间公式\n * 最大宽度 max-width: 300% !important;\n */\n#nice .block-equation svg {\n}\n\n/* 行内公式\n */\n#nice .inline-equation svg { \n}',
        article: "https://mp.weixin.qq.com/s/iL8xlH0I3yOEOrhcBqc0kg",
        html: null,
        exampleHtml: null,
        authorName: "Krahets",
        authorId: null,
        description: "兰青的作者很懒，暂时没有描述",
        checked: true,
        userThemeId: null,
        createTime: "2020-04-04T12:14:47.000+0000",
        updateTime: "2020-04-04T23:10:33.000+0000",
      },
      {
        themeId: 11,
        name: "山吹",
        cover: "https://imgkr.cn-bj.ufileos.com/230788ed-445c-4e1b-82f5-bf3a7c849e9d.png",
        css:
          '/*自定义样式，实时生效*/\n#nice {\n}\n\n#nice p {\n\tmargin: 0 0 20px;\n\tpadding: 0;\n\tline-height: 1.8em;\n\tcolor: #3a3a3a;\n}\n\n/* 一级标题 */\n#nice h1 {\n font-size: 2.1em;\n\tline-height: 1.1em;\n\tpadding-top: 16px;\n padding-bottom: 10px;\n margin-bottom: 4px;\n border-bottom: 1px solid #c99833;\n}\n/* 一级标题内容 */\n#nice h1 .content {\n color: #515151;\n font-weight: 700;\n}\n\n#nice h2, h3, h4, h5, h6 {\n line-height: 1.5em;\n margin-top: 2.2em;\n margin-bottom: 4px;\n}\n\n/* 一级标题修饰 请参考有实例的主题 */\n#nice h1:after {}\n\n/* 二级标题 */\n#nice h2 {\n margin-bottom: 35px;\n}\n\n/* 二级标题内容 */\n\n#nice h2 .content {\n display: inline-block;\n font-weight: bold;\n background: linear-gradient(#fff 60%, #ffb11b 40%);\n color: #515151;\n padding: 2px 13px 2px;\n margin-right: 3px;\n height: 50%;\n}\n\n/* 二级标题修饰 请参考有实例的主题 */\n#nice h2:after {}\n\n/* 三级标题 */\n#nice h3 {\n line-height: 1.4;\n padding-top: 10px;\n margin: 10px 0 5px;\n}\n\n/* 三级标题内容 */\n#nice h3 .content {\n color: #515151;\n font-weight: 700;\n font-size: 1.0em;\n padding-left: 20px;\n border-left: 3px solid #f9bf45;\n}\n\n/* 三级标题修饰 请参考有实例的主题 */\n#nice h3:after {}\n\n/* 引用\n* 左边缘颜色 border-left-color: black;\n* 背景色 background: gray;\n*/\n#nice blockquote {\n border-left-color: #ffb11b;\n background: #fff5e3;\n}\n\n/* 引用文字 */\n#nice blockquote p {\n color: #595959;\n}\n\n/* 链接 */\n#nice a {\n border: none;\n text-decoration: none;\n color: #dda52d;\n}\n\n#nice a:hover {\n color: #f9bf45;\n text-decoration: underline;\n}\n\n/* 无序列表整体样式\n * list-style-type: square|circle|disc;\n */\n#nice ul {\n}\n\n/* 有序列表整体样式\n * list-style-type: upper-roman|lower-greek|lower-alpha;\n */\n#nice ol {\n}\n\n/* 列表内容，不要设置li\n */\n#nice li section {\n}\n\n/* 加粗 */\n#nice strong {}\n\n/* 斜体 */\n#nice em {}\n\n/* 加粗斜体 */\n#nice em strong {}\n\n/* 删除线 */\n#nice del {\n color: #d19826;\n}\n\n/* 分隔线\n* 粗细、样式和颜色\n* border-top: 1px solid #3e3e3e;\n*/\n#nice hr {\n border-top: 1px solid #f9bf45;\n margin: 20px 0px;\n}\n\n/* 图片\n* 宽度 width: 80%;\n* 居中 margin: 0 auto;\n* 居左 margin: 0 0;\n*/\n#nice img {\n width: 100%;\n border-radius: 5px;\n display: block;\n margin-bottom: 15px;\n height: auto;\n}\n\n/* 图片描述文字 */\n#nice figcaption {\n color: #dda52d;\n font-size: 14px;\n}\n\n/* 行内代码 */\n#nice p code, #nice li code {\n color: #9b6e23;\n background-color: #fff5e3;\n padding: 3px;\n margin: 3px;\n}\n\n/* 非微信代码块\n * 代码块不换行 display: -webkit-box !important;\n * 代码块换行 display: block;\n */\n#nice pre code {}\n\n/*\n * 表格内的单元格\n * 字体大小 font-size: 16px;\n * 边框 border: 1px solid #ccc;\n * 内边距 padding: 5px 10px;\n */\n#nice table tr th,\n#nice table tr td {\n text-align: center;\n}\n\n/* 脚注文字 */\n#nice .footnote-word {\n color: #ffb11b;\n padding: 3px;\n}\n\n/* 脚注上标 */\n#nice .footnote-ref {\n color: #dda52d;\n margin: 2px;\n padding: 3px;\n}\n\n/* "参考资料"四个字 \n * 内容 content: "参考资料";\n */\n#nice .footnotes-sep:before {\n margin: 30px 0px 15px 0px;\n font-weight: 800;\n}\n\n\n/* 参考资料编号 */\n#nice .footnote-num {\n}\n\n/* 参考资料文字 */\n#nice .footnote-item p { \n}\n\n/* 参考资料解释 */\n#nice .footnote-item p em {\n}\n\n/* 行间公式\n * 最大宽度 max-width: 300% !important;\n */\n#nice .block-equation svg {\n}\n\n/* 行内公式\n */\n#nice .inline-equation svg { \n}\n\n/* 滑动图片\n */\n#nice .imageflow-img {\n display: inline-block;\n width:100%;\n margin-bottom: 0;\n}',
        article: "",
        html: null,
        exampleHtml: null,
        authorName: "ElyhG",
        authorId: null,
        description: "山吹的作者很懒，暂时没有描述",
        checked: true,
        userThemeId: null,
        createTime: "2020-04-04T12:14:53.000+0000",
        updateTime: "2020-04-12T19:55:39.000+0000",
      },
      {
        themeId: 12,
        name: "前端之巅同款",
        cover: "https://imgkr.cn-bj.ufileos.com/d47053e8-331f-4514-b0e9-9e5d851162b4.png",
        css:
          '/*初始化格式*/\n\n#nice {\n line-height: 1.6;\n letter-spacing: .034em;\n color: rgb(63, 63, 63);\n font-size: 16px;\n word-break:all;\n}\n\n#nice p {\n padding-top: 23px;\n color: rgb(74,74,74);\n line-height: 1.75em;\n}\n\n/* 一级标题 */\n#nice h1 {\n text-align:center;\n background-image: url(https://my-wechat.mdnice.com/mdnice/mountain_2_20191028221337.png); \n background-position: center top;\n background-repeat: no-repeat;\n background-size: 95px;\n line-height:95px;\n margin-top: 38px;\n margin-bottom: 10px;\n}\n\n/* 一级标题内容 */\n#nice h1 .content {\n font-size: 20px;\n color: rgb(60, 112, 198);\n border-bottom:2px solid #3C7076;\n}\n\n/* 一级标题修饰 请参考有实例的主题 */\n#nice h1:after {\n}\n \n/* 二级标题 */\n#nice h2 {\n display:block;\n text-align:center;\n background-image: url(https://my-wechat.mdnice.com/mdnice/mountain_2_20191028221337.png); \n background-position: center center;\n background-repeat: no-repeat;\n background-attachment: initial;\n background-origin: initial;\n background-clip: initial;\n background-size: 63px;\n margin-top: 38px;\n margin-bottom: 10px;\n}\n\n/*二级标题伪元素*/\n#nice h2:before {\n}\n\n/* 二级标题内容 */\n#nice h2 .content {\n text-align:center;\n display: inline-block;\n height: 38px;\n line-height: 42px;\n color: rgb(60, 112, 198);\n background-position: left center;\n background-repeat: no-repeat;\n background-attachment: initial;\n background-origin: initial;\n background-clip: initial;\n background-size: 63px;\n margin-top: 38px;\n font-size:18px;\n margin-bottom: 10px;\n}\n\n/* 三级标题 */\n#nice h3:before {\n content: "";\n background-image:url(https://my-wechat.mdnice.com/mdnice/mountain_1_20191028221337.png);\n background-size:15px 15px;\n display: inline-block;\n width: 15px;\n height: 15px;\n line-height:15px;\n margin-bottom:-1px;\n}\n\n#nice h3 {\n}\n\n/* 三级标题内容 */\n#nice h3 .content {\n font-size:16px;\n font-weight:bold;\n display:inline-block;\n margin-left:8px;\n color:rgb(60,112,198);\n}\n\n/* 三级标题修饰 请参考有实例的主题 */\n#nice h3:after {\n}\n\n/* 列表内容 */\n#nice li {\n}\n\n/* 引用\n * 左边缘颜色 border-left-color:black;\n * 背景色 background:gray;\n */\n#nice blockquote {\n padding: 15px 20px;\n line-height: 27px;\n background-color: rgb(239, 239, 239);\n border-left:none;\n display:block;\n}\n\n/* 引用文字 */\n#nice blockquote p {\n padding: 0px;\n font-size:15px;\n color:rgb(89,89,89);\n}\n\n/* 链接 */\n#nice a {\n color: rgb(60, 112, 198);\n text-decoration:none;\n border-bottom: 1px solid rgb(60, 112, 198);\n}\n\n/* 加粗 */\n#nice strong {\n line-height: 1.75em;\n color: rgb(74,74,74);\n}\n\n/* 斜体 */\n#nice em {\n}\n\n/* 加粗斜体 */\n#nice em strong {\n color:rgb(248,57,41);\n letter-spacing:0.3em;\n}\n\n/* 删除线 */\n#nice del {\n}\n \n/* 分割线 */\n#nice hr {\n height:1px;\n padding:0;\n border:none;\n text-align:center;\n background-image:linear-gradient(to right,rgba(60,122,198,0),rgba(60,122,198,0.75),rgba(60,122,198,0));\n}\n\n/* 图片 */\n#nice img {\n border-radius:4px;\n margin-bottom:25px;\n}\n\n/* 图片描述文字 */\n#nice figcaption {\n display:block;\n font-size:12px;\n font-family:PingFangSC-Light;\n}\n\n/* 行内代码 */\n#nice p code, #nice li code {\n\tcolor: rgb(60, 112, 198);;\n}\n\n/* 非微信代码块\n * 代码块不换行 display:-webkit-box !important;\n * 代码块换行 display:block;\n */\n#nice pre code {\n}\n\n/* 表格内的单元格\n * 字体大小 font-size: 16px;\n * 边框 border: 1px solid #ccc;\n * 内边距 padding: 5px 10px;\n */\n#nice table tr th,\n#nice table tr td {\n font-size: 14px;\n}\n\n#nice .footnotes{\n padding-top: 8px;\n}\n\n/* 脚注文字 */\n#nice .footnote-word {\n color: rgb(60, 112, 198);\n}\n\n/* 脚注上标 */\n#nice .footnote-ref {\n color: rgb(60, 112, 198);\n}\n\n/* 脚注超链接样式 */\n#nice .footnote-item em {\n color: rgb(60, 112, 198);\n font-size:13px;\n font-style:normal;\n border-bottom-color:1px dashed rgb(60, 112, 198); \n}\n\n/* "参考资料"四个字 \n * 内容 content: "参考资料";\n */\n#nice .footnotes-sep:before {\n background-image: none;\n background-size: none;\n display: block;\n width: auto;\n height: auto;\n}\n\n/* 参考资料编号 */\n#nice .footnote-num {\n color: rgb(60, 112, 198);\n}\n\n/* 参考资料文字 */\n#nice .footnote-item p {\n color: rgb(60, 112, 198);\n font-weight:bold;\n}\n\n/* 参考资料超链接 */\n#nice .footnote-item a {\n color:rgb(60, 112, 198);\n}\n\n/* 参考资料解释 */\n#nice .footnote-item p em {\n font-size:14px;\n font-weight:normal;\n border-bottom:1px dashed rgb(60, 112, 198);\n}\n\n/* 行间公式\n * 最大宽度 max-width: 300% !important;\n */\n#nice .block-equation svg {\n \n}\n\n/* 行内公式*/\n#nice .inline-equation svg { \n}\n\n/* 滑动图片\n */\n#nice .imageflow-img {\n display: inline-block;\n width:100%;\n margin-bottom: 0;\n}',
        article: "https://mp.weixin.qq.com/s/sSJwPflpzan1R_7kmBRwmQ",
        html: null,
        exampleHtml: null,
        authorName: "HeyRain",
        authorId: null,
        description: "前端之巅的作者很懒，暂时没有描述",
        checked: true,
        userThemeId: null,
        createTime: "2020-04-04T12:15:02.000+0000",
        updateTime: "2020-04-12T19:55:55.000+0000",
      },
      {
        themeId: 13,
        name: "极客黑\n\n",
        cover: "https://imgkr.cn-bj.ufileos.com/8a17bfda-c99c-4f4f-a3d7-ed5a0757aefb.png",
        css:
          '/*自定义样式，实时生效*/\n\n/* 全局属性\n * 页边距 padding: 30px;\n * 全文字体 font-family: ptima-Regular;\n * 英文换行 word-break: break-all;\n */\n#nice {\n}\n\n/* 段落，下方未标注标签参数均同此处\n * 上边距 margin-top: 5px;\n * 下边距 margin-bottom: 5px;\n * 行高 line-height: 26px;\n * 词间距 word-spacing: 3px;\n * 字间距 letter-spacing: 3px;\n * 对齐 text-align: left;\n * 颜色 color: #3e3e3e;\n * 字体大小 font-size: 16px;\n * 首行缩进 text-indent: 2em;\n */\n#nice p {\n box-sizing: border-box;\n margin-bottom: 16px;\n font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif;\n font-size: 15px;\n text-align: start;\n white-space: normal;\n text-size-adjust: auto;\n line-height: 1.75em;\n}\n\n/* 一级标题 */\n#nice h1 {\n margin-top: -0.46em;\n margin-bottom: 0.1em;\n border-bottom: 2px solid rgb(198, 196, 196);\n box-sizing: border-box;\n}\n\n/* 一级标题内容 */\n#nice h1 .content {\n padding-top: 5px;\n padding-bottom: 5px;\n color: rgb(160, 160, 160);\n font-size: 13px;\n line-height: 2;\n box-sizing: border-box;\n}\n\n/* 一级标题修饰 请参考有实例的主题 */\n#nice h1:after {\n}\n\n/* 二级标题 */\n#nice h2 {\n margin: 10px auto;\n height: 40px;\n background-color: rgb(251, 251, 251);\n border-bottom: 1px solid rgb(246, 246, 246);\n overflow: hidden;\n box-sizing: border-box;\n}\n\n/* 二级标题内容 */\n#nice h2 .content {\n margin-left: -10px;\n display: inline-block;\n width: auto;\n height: 40px;\n background-color: rgb(33, 33, 34);\n border-bottom-right-radius:100px;\n color: rgb(255, 255, 255);\n padding-right: 30px;\n padding-left: 30px;\n line-height: 40px;\n font-size: 16px;\n}\n\n/* 二级标题修饰 请参考有实例的主题 */\n#nice h2:after {\n}\n\n/* 三级标题 */\n#nice h3 {\n margin: 20px auto 5px;\n border-top: 1px solid rgb(221, 221, 221);\n box-sizing: border-box;\n}\n\n/* 三级标题内容 */\n#nice h3 .content {\n margin-top: -1px;\n padding-top: 6px;\n padding-right: 5px;\n padding-left: 5px;\n font-size: 17px;\n border-top: 2px solid rgb(33, 33, 34);\n display: inline-block;\n line-height: 1.1;\n}\n\n/* 三级标题修饰 请参考有实例的主题 */\n#nice h3:after {\n}\n\n#nice h4 {\n margin: 10px auto -1px;\n border-top: 1px solid rgb(221, 221, 221);\n box-sizing: border-box;\n}\n\n#nice h4 .content {\n margin-top: -1px;\n padding-top: 6px;\n padding-right: 5px;\n padding-left: 5px;\n font-size: 16px;\n border-top: 2px solid rgb(33, 33, 34);\n display: inline-block;\n line-height: 1.1;\n}\n\n/* 无序列表整体样式\n * list-style-type: square|circle|disc;\n */\n#nice ul {\n}\n\n/* 有序列表整体样式\n * list-style-type: upper-roman|lower-greek|lower-alpha;\n */\n#nice ol {\n}\n\n/* 列表内容，不要设置li\n */\n#nice li section {\n font-size: 15px;\n font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif;\n}\n\n/* 引用\n * 左边缘颜色 border-left-color: black;\n * 背景色 background: gray;\n */\n#nice blockquote {\n border-left-color: rgb(221, 221, 221);\n margin-top: 1.2em;\n margin-bottom: 1.2em;\n padding-right: 1em;\n padding-left: 1em;\n border-left-width: 4px;\n color: rgb(119, 119, 119);\n quotes: none;\n}\n\n/* 引用文字 */\n#nice blockquote p {\n font-size: 15px;\n font-family: -apple-system-font, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei UI", "Microsoft YaHei", Arial, sans-serif;\n color: rgb(119, 119, 119);\n line-height: 1.75em;\n}\n\n/* 链接 \n * border-bottom: 1px solid #009688;\n */\n#nice a {\n color: rgb(239, 112, 96);\n border-bottom: 1px solid rgb(239, 112, 96);\n}\n\n/* 加粗 */\n#nice strong {\n}\n\n/* 斜体 */\n#nice em {\n}\n\n/* 加粗斜体 */\n#nice em strong {\n}\n\n/* 删除线 */\n#nice del {\n}\n\n/* 分隔线\n * 粗细、样式和颜色\n * border-top: 1px solid #3e3e3e;\n */\n#nice hr {\n}\n\n/* 图片\n * 宽度 width: 80%;\n * 居中 margin: 0 auto;\n * 居左 margin: 0 0;\n */\n#nice img {\n}\n\n/* 图片描述文字 */\n#nice figcaption {\n}\n\n/* 行内代码 */\n#nice p code, #nice li code {\n color: rgb(239, 112, 96);\n}\n\n/* 非微信代码块\n * 代码块不换行 display: -webkit-box !important;\n * 代码块换行 display: block;\n */\n#nice pre code {\n}\n\n/*\n * 表格内的单元格\n * 字体大小 font-size: 16px;\n * 边框 border: 1px solid #ccc;\n * 内边距 padding: 5px 10px;\n */\n#nice table tr th,\n#nice table tr td {\n}\n\n/* 脚注文字 */\n#nice .footnote-word {\n color: #ff3502;\n}\n\n/* 脚注上标 */\n#nice .footnote-ref {\n color: rgb(239, 112, 96);\n}\n\n/* "参考资料"四个字 \n * 内容 content: "参考资料";\n */\n#nice .footnotes-sep:before {\n}\n\n/* 参考资料编号 */\n#nice .footnote-num {\n}\n\n/* 参考资料文字 */\n#nice .footnote-item p { \n}\n\n/* 参考资料解释 */\n#nice .footnote-item p em {\n}\n\n/* 行间公式\n * 最大宽度 max-width: 300% !important;\n */\n#nice .block-equation svg {\n}\n\n/* 行内公式\n */\n#nice .inline-equation svg { \n}',
        article: null,
        html: null,
        exampleHtml: null,
        authorName: "hyper-xx",
        authorId: null,
        description: "极客黑的作者很懒，暂时没有描述",
        checked: true,
        userThemeId: null,
        createTime: "2020-04-04T12:15:07.000+0000",
        updateTime: "2020-04-04T23:10:38.000+0000",
      },
      {
        themeId: 14,
        name: "简",
        cover: "https://imgkr.cn-bj.ufileos.com/3c60e232-5035-45ed-a467-184c6539372b.png",
        css:
          "/* 根据该字体大小，统一调整文章整体大小 */\n/* 间距，其他字体，代码块以及注脚 */\n/* 不会控制微信代码块 */\n#nice {\n font-size: 16px;\n}\n\n/* 颜色管理 */\n#nice a {\n color: #3e64ff;\n}\n#nice p code {\n color: #e46918;\n background-color: #efefef;\n}\n#nice .footnote-word,\n#nice .footnote-ref {\n color: #004a7c;\n}\n#nice .footnote-item em {\n color: #004a7c;\n}\n\n/* 统一间距 */\n#nice p,\n#nice section,\n#nice h1,\n#nice h2,\n#nice h3,\n#nice h4,\n#nice h5,\n#nice h6,\n#nice pre,\n#nice figure,\n#nice ul,\n#nice hr {\n margin: 1em 0;\n color: #333;\n}\n\n#nice {\n margin-top: -1em;\n color: #333;\n padding-top: 0;\n padding-bottom: 0;\n font-family: -apple-system,system-ui,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Arial,sans-serif;\n}\n#nice * {\n line-height: 1.6 !important;\n}\n\n#nice hr {\n border-top: 1px solid #dfe2e5\n}\n\n/* 标题调整 */\n#nice h1 {\n font-size: 1.4em;\n}\n#nice h2 {\n font-size: 1.3em;\n}\n#nice h1,\n#nice h2 {\n padding-bottom: .3em;\n border-bottom: 1px solid #dfe2e5;\n}\n#nice h3 {\n font-size: 1.2em;\n}\n#nice h4 {\n font-size: 1.1em;\n}\n#nice h5 {\n font-size: 1em;\n}\n#nice h6 {\n font-size: 1em;\n}\n\n/* 段落调整 */\n#nice p {\n padding: 0;\n font-size: inherit;\n color: #333;\n}\n#nice blockquote {\n background: none;\n border-left: 4px solid #ddd;\n padding: 0 1em;\n}\n#nice blockquote p {\n margin: 0;\n color: #666;\n}\n#nice strong {\n color: #333;\n}\n\n#nice a {\n font-weight: normal;\n border-color: inherit;\n}\n\n/* 列表调整 */\n#nice li section {\n margin-top: .3em;\n margin-bottom: .3em;\n font-weight: normal;\n}\n#nice li ul {\n margin: 0;\n}\n\n/* 代码块调整 */\n#nice pre {\n border-radius: 4px;\n}\n#nice section pre {\n margin: 0;\n padding-top: 0;\n padding-bottom: 0;\n}\n#nice p code {\n font-size: .875em;\n}\n#nice pre code {\n font-size: .875em;\n}\n\n#nice figure img {\n max-width: 100%;\n width: auto;\n margin: 0 auto;\n}\n\n/* table 调整 */\n#nice table tr th,\n#nice table tr td {\n font-size: 1em;\n}\n\n/* 注脚调整 */\n#nice .footnotes-sep {\n font-size: 1.3em;\n}\n#nice .footnote-item {\n margin: .4em 0;\n}\n#nice .footnote-item * {\n line-height: 1.4 !important;\n}\n#nice .footnote-item p {\n margin: 0;\n font-size: .9em;\n}\n#nice .footnote-item em {\n font-style: normal;\n padding-left: .5em;\n}\n#nice .footnote-item span {\n flex: 0 0 1.5em;\n margin-right: 10px;\n font-size: .9em;\n}\n\n/* 微信默认样式修复 */\n/* 微信代码块固定为 14px */\n#nice pre.code-snippet__js {\n padding: 16px 0;\n}\n\n#nice pre.code-snippet__js code {\n font-size: 14px;\n}\n\n/* 滑动图片\n */\n#nice .imageflow-img {\n display: inline-block;\n width:100%;\n margin-bottom: 0;\n}",
        article: "https://mp.weixin.qq.com/s/JawcVvG_y8igDK5reRDktg",
        html: null,
        exampleHtml: null,
        authorName: "aco",
        authorId: null,
        description: "简的作者很懒，暂时没有描述",
        checked: true,
        userThemeId: null,
        createTime: "2020-04-04T12:15:14.000+0000",
        updateTime: "2020-04-12T19:56:49.000+0000",
      },
      {
        themeId: 15,
        name: "蔷薇紫",
        cover: "https://imgkr.cn-bj.ufileos.com/0abd2bb1-305e-42a1-a418-a394bb19c633.png",
        css:
          '/* 全局属性\n* 页边距 padding:30px;\n* 全文字体 font-family:optima-Regular;\n* 英文换行 word-break:break-all;\ncolor:#595959;\n*/\n#nice {\n line-height: 1.75;\n color: #595959;\n font-family: Optima-Regular, Optima, PingFangTC-Light, PingFangSC-light, PingFangTC-light;\n letter-spacing: 2px;\n background-image: linear-gradient(90deg, rgba(50, 0, 0, 0.05) 3%, rgba(0, 0, 0, 0) 3%), linear-gradient(360deg, rgba(50, 0, 0, 0.05) 3%, rgba(0, 0, 0, 0) 3%);\n background-size: 20px 20px;\n background-position: center center;\n}\n\n/* 段落，下方未标注标签参数均同此处\n* 上边距 margin-top:5px;\n* 下边距 margin-bottom:5px;\n* 行高 line-height:26px;\n* 词间距 word-spacing:3px;\n* 字间距 letter-spacing:3px;\n* 对齐 text-align:left;\n* 颜色 color:#3e3e3e;\n* 字体大小 font-size:16px;\n* 首行缩进 text-indent:2em;\n*/\n#nice p {\n color: #595959;\n margin: 10px 0px;\n letter-spacing: 2px;\n font-size: 14px;\n word-spacing: 2px;\n}\n\n/* 一级标题 */\n#nice h1 {\n font-size: 25px;\n}\n\n/* 一级标题内容 */\n#nice h1 .content {\n display: inline-block;\n font-weight: bold;\n color: #595959;\n}\n\n/* 一级标题修饰 请参考有实例的主题 */\n#nice h1:after {}\n\n/* 二级标题 */\n#nice h2 {\n text-align: left;\n margin: 20px 10px 0px 0px;\n}\n\n/* 二级标题内容 */\n#nice h2 .content {\n font-size: 18px;\n font-weight: bold;\n display: inline-block;\n padding-left: 10px;\n border-left: 5px solid #DEC6FB;\n color: #595959;\n\n}\n\n/* 二级标题修饰 请参考有实例的主题 */\n#nice h2:after {}\n\n/* 三级标题 */\n#nice h3 {\n font-size: 16px;\n font-weight: bold;\n text-align: center;\n}\n\n/* 三级标题内容 */\n#nice h3 .content {\n border-bottom: 2px solid #DEC6FB;\n color: #595959;\n}\n\n/* 三级标题修饰 请参考有实例的主题 */\n#nice h3:after {}\n\n/* 无序列表整体样式\n* list-style-type: square|circle|disc;\n*/\n#nice ul {\n font-size: 15px; /*神奇逻辑，必须比li section的字体大才会在二级中生效*/\n color: #595959;\n list-style-type: circle;\n}\n\n\n/* 有序列表整体样式\n* list-style-type: upper-roman|lower-greek|lower-alpha;\n*/\n#nice ol {\n font-size: 15px;\n color: #595959;\n}\n\n/* 列表内容，不要设置li\n*/\n#nice li section {\n font-size: 14px;\n font-weight: normal;\n color: #595959;\n}\n\n/* 引用\n* 左边缘颜色 border-left-color:black;\n* 背景色 background:gray;\n*/\n#nice blockquote::before {\n content: "❝";\n /* color: #d9b8fa;*/\n color: #DEC6FB;\n font-size: 34px;\n line-height: 1;\n font-weight: 700;\n}\n\n#nice blockquote {\n text-size-adjust: 100%;\n line-height: 1.55em;\n font-weight: 400;\n border-radius: 6px;\n color: #595959;\n font-style: normal;\n text-align: left;\n box-sizing: inherit;\n border-left: none;\n border: 1px solid #DEC6FB;\n background: #F6EEFF;\n\n}\n\n#nice blockquote p {\n color: #595959;\n}\n\n#nice blockquote::after {\n content: "❞";\n float: right;\n /* color: #d9b8fa; */\n color: #DEC6FB;\n}\n\n/* 链接 \n* border-bottom: 1px solid #009688;\n*/\n#nice a {\n color: #664D9D;\n font-weight: normal;\n border-bottom: 1px solid #664D9D;\n}\n\n#nice strong::before {\n content: \'「\';\n}\n\n/* 加粗 */\n#nice strong {\n color: #595959;\n font-weight: bold;\n}\n\n#nice strong::after {\n content: \'」\';\n}\n\n/* 斜体 */\n#nice em {\n font-style: normal;\n color: #595959;\n background: #F6EEFF;\n}\n\n/* 加粗斜体 */\n#nice em strong {\n color: #595959;\n}\n\n/* 删除线 */\n#nice del {\n color: #595959;\n}\n\n/* 分隔线\n* 粗细、样式和颜色\n* border-top:1px solid #3e3e3e;\n*/\n#nice hr {\n height: 1px;\n padding: 0;\n border: none;\n border-top: 2px solid #d9b8fa;\n}\n\n/* 图片\n* 宽度 width:80%;\n* 居中 margin:0 auto;\n* 居左 margin:0 0;\n*/\n#nice img {\n border-radius: 6px;\n display: block;\n margin: 20px auto;\n object-fit: contain;\n}\n\n/* 图片描述文字 */\n#nice figcaption {\n display: block;\n font-size: 13px;\n color: #595959;\n}\n\n/* 行内代码 */\n#nice p code,\n#nice li code {\n color: #595959;\n}\n\n/* 非微信代码块\n* 代码块不换行 display:-webkit-box !important;\n* 代码块换行 display:block;\n*/\n#nice .code-snippet__fix {\n background: #f7f7f7;\n border-radius: 2px;\n}\n\n#nice pre code {\n /* background: #f7f7f7; */\n}\n\n/*\n* 表格内的单元格\n* 字体大小 font-size: 16px;\n* 边框 border: 1px solid #ccc;\n* 内边距 padding: 5px 10px;\n*/\n#nice table tr th,\n#nice table tr td {\n font-size: 14px;\n color: #595959;\n}\n\n#nice .footnotes {\n background: #F6EEFF;\n padding: 20px 20px 20px 20px;\n font-size: 14px;\n border: 0.8px solid #DEC6FB;\n border-radius: 6px;\n border: 1px solid #DEC6FB;\n}\n\n/* 脚注文字 */\n#nice .footnote-word {\n font-weight: normal;\n color: #595959;\n}\n\n/* 脚注上标 */\n#nice .footnote-ref {\n font-weight: normal;\n color: #595959;\n}\n\n/*脚注链接样式*/\n#nice .footnote-item em {\n background: #F6EEFF;\n font-size: 14px;\n color: #595959;\n display: block;\n}\n\n/* "参考资料"四个字 \n* 内容 content: "参考资料";\n*/\n#nice .footnotes-sep:before {\n content: \'Reference\';\n color: #595959;\n letter-spacing: 1px;\n border-bottom: 2px solid #DEC6FB;\n display: inline;\n background: linear-gradient(white 60%, #F6EEFF 40%);\n font-size: 20px;\n}\n\n/* 参考资料编号 */\n#nice .footnote-num {}\n\n/* 参考资料文字 */\n#nice .footnote-item p {\n color: #595959;\n font-weight: bold;\n}\n\n/* 参考资料解释 */\n#nice .footnote-item p em {\n font-weight: normal;\n}\n\n/* 行间公式\n* 最大宽度 max-width: 300% !important;\n*/\n#nice .block-equation svg {}\n\n/* 行内公式\n*/\n#nice .inline-equation svg {}\n\n/* 滑动图片\n */\n#nice .imageflow-img {\n display: inline-block;\n width:100%;\n margin-bottom: 0;\n}',
        article: "https://mp.weixin.qq.com/s/x0xqSpQixW2xj5qXCgWSyA",
        html: null,
        exampleHtml: null,
        authorName: "HeyRain",
        authorId: null,
        description: "蔷薇紫的作者很懒，暂时没有描述",
        checked: true,
        userThemeId: null,
        createTime: "2020-04-04T12:15:21.000+0000",
        updateTime: "2020-04-12T19:56:58.000+0000",
      },
      {
        themeId: 16,
        name: "萌绿",
        cover: "https://imgkr.cn-bj.ufileos.com/db479dc5-2f9f-4721-959c-498b5a92a788.png",
        css:
          '#nice {\n line-height: 1.6;\n letter-spacing: .034em;\n color: rgb(63, 63, 63);\n font-size: 16px;\n word-break:all;\n}\n#nice p {\n padding-top: 1em;\n color: rgb(74,74,74);\n line-height: 1.75em;\n}\n/* 一级标题 */\n#nice h1 {\n text-align:center;\n background-image: \turl(https://static.xkcoding.com/mdnice/theme/koala/title_h1.png); \n background-position: center top;\n background-repeat: no-repeat;\n background-size: 75px;\n line-height:95px;\n margin-top: 38px;\n margin-bottom: 10px;\n}\n/* 一级标题内容 */\n#nice h1 .content {\n font-size: 20px;\n color: #48b378;;\n border-bottom:2px solid #2e7950;\n}\n/* 一级标题修饰 请参考有实例的主题 */\n#nice h1:after {\n}\n \n/* 二级标题 */\n#nice h2 {\n display:block;\n text-align:center;\n background-image: \turl(https://static.xkcoding.com/mdnice/theme/koala/title.png); \n background-position: center center;\n background-repeat: no-repeat;\n background-attachment: initial;\n background-origin: initial;\n background-clip: initial;\n background-size: 50px;\n margin-top: 1em;\n margin-bottom: 10px;\n}\n/*二级标题伪元素*/\n#nice h2:before {\n}\n/* 二级标题内容 */\n#nice h2 .content {\n text-align:center;\n display: inline-block;\n height: 38px;\n line-height: 42px;\n color: #48b378;\n background-position: left center;\n background-repeat: no-repeat;\n background-attachment: initial;\n background-origin: initial;\n background-clip: initial;\n background-size: 63px;\n margin-top: 38px;\n font-size:18px;\n margin-bottom: 10px;\n}\n/* 三级标题 */\n#nice h3:before {\n content: "";\n background-image:url(https://static.xkcoding.com/mdnice/theme/koala/title_h2.png);\n background-size:100% 100%;\n background-repeat:no-repeat;\n display: inline-block;\n width: 16px;\n height: 15px;\n line-height:15px;\n margin-bottom:-1px;\n}\n#nice h3 {\n margin-top:1.2em;\n}\n#nice h4 {\n margin-top: 30px;\n}\n/* 三级标题内容 */\n#nice h3 .content {\n font-size:17px;\n font-weight:bold;\n display:inline-block;\n margin-left:8px;\n color:#48b378;\n}\n/* 三级标题修饰 请参考有实例的主题 */\n#nice h3:after {\n}\n/* 列表内容 */\n#nice li {\n}\n/* 引用\n * 左边缘颜色 border-left-color:black;\n * 背景色 background:gray;\n */\n#nice blockquote {\n padding: 15px 20px;\n line-height: 27px;\n background-color:#FBF9FD;\n border-left:3px solid #35b378;\n display:block;\n}\n/* 引用文字 */\n#nice blockquote p {\n padding: 0px;\n font-size:15px;\n color:rgb(89,89,89);\n}\n/* 链接 */\n#nice a {\n color: #48b378;\n text-decoration:none;\n border-bottom: 1px solid #48b378;\n}\n/* 加粗 */\n#nice strong {\n line-height: 1.75em;\n color: rgb(74,74,74);\n}\n/* 斜体 */\n#nice em {\n}\n/* 加粗斜体 */\n#nice em strong {\n color:rgb(248,57,41);\n letter-spacing:0.3em;\n}\n/* 删除线 */\n#nice del {\n}\n \n/* 分割线 */\n#nice hr {\n height:1px;\n padding:0;\n border:none;\n text-align:center;\n background-image:linear-gradient(to right,rgba(93, 186, 133,0),rgba(93, 186, 133,0.75),rgba(93, 186, 133,0));\n}\n/* 图片 */\n#nice img {\n border-radius:4px;\n margin-bottom:25px;\n}\n/* 图片描述文字 */\n#nice figcaption {\n display:block;\n font-size:12px;\n font-family:PingFangSC-Light;\n}\n/* 行内代码 */\n#nice p code, #nice li code {\n\tcolor: #28ca71;\n}\n/* 非微信代码块\n * 代码块不换行 display:-webkit-box !important;\n * 代码块换行 display:block;\n */\n#nice pre code {\n}\n/* 表格内的单元格\n * 字体大小 font-size: 16px;\n * 边框 border: 1px solid #ccc;\n * 内边距 padding: 5px 10px;\n */\n#nice table tr th,\n#nice table tr td {\n font-size: 14px;\n}\n#nice .footnotes{\n padding-top: 8px;\n}\n/* 脚注文字 */\n#nice .footnote-word {\n color: rgb(90, 185, 131);\n}\n/* 脚注上标 */\n#nice .footnote-ref {\n color: rgb(90, 185, 131);\n}\n/* 脚注超链接样式 */\n#nice .footnote-item em {\n color: rgb(90, 185, 131);\n font-size:13px;\n font-style:normal;\n border-bottom-color:1px dashed rgb(90, 185, 131); \n}\n/* "参考资料"四个字 \n * 内容 content: "参考资料";\n */\n#nice .footnotes-sep:before {\n background-image: none;\n background-size: none;\n display: block;\n width: auto;\n height: auto;\n}\n/* 参考资料编号 */\n#nice .footnote-num {\n color: rgb(90, 185, 131);\n}\n/* 参考资料文字 */\n#nice .footnote-item p {\n color: rgb(90, 185, 131);\n font-weight:bold;\n}\n/* 参考资料超链接 */\n#nice .footnote-item a {\n color:rgb(93, 186, 133);\n}\n/* 参考资料解释 */\n#nice .footnote-item p em {\n font-size:14px;\n font-weight:normal;\n border-bottom:1px dashed rgb(93, 186, 133);\n}\n/* 行间公式\n * 最大宽度 max-width: 300% !important;\n */\n#nice .block-equation svg {\n}\n/* 行内公式*/\n#nice .inline-equation svg { \n}\n\n/* 滑动图片\n */\n#nice .imageflow-img {\n display: inline-block;\n width:100%;\n margin-bottom: 0;\n}',
        article: "https://mp.weixin.qq.com/s/iK3r9I28NMWApEydH046-w",
        html: null,
        exampleHtml: null,
        authorName: "koala",
        authorId: null,
        description: "萌绿的作者很懒，暂时没有描述",
        checked: true,
        userThemeId: null,
        createTime: "2020-04-04T12:15:26.000+0000",
        updateTime: "2020-04-12T19:57:47.000+0000",
      },
      {
        themeId: 17,
        name: "全栈蓝",
        cover: "https://imgkr.cn-bj.ufileos.com/76b7f574-0513-4016-97c0-4bd1436877be.png",
        css:
          "/*自定义样式，实时生效*/\n\n/* 全局属性\n* 页边距 padding:30px;\n* 全文字体 font-family:optima-Regular;\n* 英文换行 word-break:break-all;\ncolor:#2b2b2b;\n*/\n#nice {\n line-height: 1.25;\n color: #2b2b2b;\n font-family: Optima-Regular, Optima, PingFangTC-Light, PingFangSC-light, PingFangTC-light;\n letter-spacing: 2px;\n background-image: linear-gradient(90deg, rgba(50, 0, 0, 0.04) 3%, rgba(0, 0, 0, 0) 3%), linear-gradient(360deg, rgba(50, 0, 0, 0.04) 3%, rgba(0, 0, 0, 0) 3%);\n background-size: 20px 20px;\n background-position: center center;\n}\n\n/* 段落，下方未标注标签参数均同此处\n* 上边距 margin-top:5px;\n* 下边距 margin-bottom:5px;\n* 行高 line-height:26px;\n* 词间距 word-spacing:3px;\n* 字间距 letter-spacing:3px;\n* 对齐 text-align:left;\n* 颜色 color:#3e3e3e;\n* 字体大小 font-size:16px;\n* 首行缩进 text-indent:2em;\n*/\n#nice p {\n color: #2b2b2b;\n margin: 10px 0px;\n letter-spacing: 2px;\n font-size: 14px;\n word-spacing: 2px;\n}\n\n/* 一级标题 */\n#nice h1 {\n font-size: 25px;\n}\n\n/* 一级标题内容 */\n#nice h1 span {\n display: inline-block;\n font-weight: bold;\n color: #40B8FA;\n}\n\n/* 一级标题修饰 请参考有实例的主题 */\n#nice h1:after {}\n\n/* 二级标题 */\n#nice h2 {\n display:block;\n border-bottom: 4px solid #40B8FA;\n}\n\n/* 二级标题内容 */\n#nice h2 .content {\n display: flex;\n color: #40B8FA;\n font-size: 20px;\n margin-left: 25px;\n}\n\n/* 二级标题前缀 */\n#nice h2 .prefix {\n display: flex;\n width: 20px;\n height: 20px;\n background-size: 20px 20px;\n background-image:url(https://imgkr.cn-bj.ufileos.com/15fdfb3c-b350-4da9-928e-5f8c506ec325.png);\n margin-bottom: -22px;\n}\n\n/* 二级标题后缀 */\n#nice h2 .suffix {\n display: flex;\n box-sizing: border-box;\n width: 200px;\n height: 10px;\n border-top-left-radius: 20px;\n background: RGBA(64, 184, 250, .5);\n color: rgb(255, 255, 255);\n font-size: 16px;\n letter-spacing: 0.544px;\n justify-content: flex-end;\n box-sizing: border-box !important;\n overflow-wrap: break-word !important;\n float: right;\n margin-top: -10px;\n}\n\n/* 三级标题 */\n#nice h3 {\n font-size: 17px;\n font-weight: bold;\n text-align: center;\n position:relative;\n margin-top: 20px;\n margin-bottom: 20px;\n}\n\n/* 三级标题内容 */\n#nice h3 .content {\n border-bottom: 2px solid RGBA(79, 177, 249, .65);\n color: #2b2b2b;\n padding-bottom:2px\n}\n\n#nice h3 .content:before{\n content:'';\n width:30px;\n height:30px;\n display:block;\n background-image:url(https://imgkr.cn-bj.ufileos.com/cdf294d0-6361-4af9-85e2-0913f0eb609b.png);\n background-position:center;\n background-size:30px;\n margin:auto;\n opacity:1;\n background-repeat:no-repeat;\n margin-bottom:-8px;\n}\n\n/* 三级标题修饰 请参考有实例的主题 */\n#nice h3:after {}\n\n#nice h4 .content {\n height:16px;\n line-height:16px;\n font-size: 16px;\n}\n\n#nice h4 .content:before{\n content:'';\n background-image:url(https://imgkr.cn-bj.ufileos.com/899e43b7-5a08-4ac6-aa00-1c45f169a65b.png);\n display:inline-block;\n width:16px;\n height:16px;\n background-size:100% ;\n background-position:left bottom;\n background-repeat:no-repeat;\n width: 16px;\n height: 15px;\n line-height:15px;\n margin-right:6px;\n margin-bottom:-2px;\n}\n\n/* 无序列表整体样式\n* list-style-type: square|circle|disc;\n*/\n#nice ul {\n font-size: 15px; /*神奇逻辑，必须比li section的字体大才会在二级中生效*/\n color: #595959;\n list-style-type: circle;\n}\n\n\n/* 有序列表整体样式\n* list-style-type: upper-roman|lower-greek|lower-alpha;\n*/\n#nice ol {\n font-size: 15px;\n color: #595959;\n}\n\n/* 列表内容，不要设置li\n*/\n#nice li section {\n font-size: 14px;\n font-weight: normal;\n color: #595959;\n}\n\n/* 引用\n* 左边缘颜色 border-left-color:black;\n* 背景色 background:gray;\n*/\n#nice blockquote::before {\n content: \"❝\";\n color: RGBA(64, 184, 250, .5);\n font-size: 34px;\n line-height: 1;\n font-weight: 700;\n}\n\n#nice blockquote {\n text-size-adjust: 100%;\n line-height: 1.55em;\n font-weight: 400;\n border-radius: 6px;\n color: #595959;\n font-style: normal;\n text-align: left;\n box-sizing: inherit;\n border-left: none;\n border: 1px solid RGBA(64, 184, 250, .4);\n background: RGBA(64, 184, 250, .1);\n\n}\n\n#nice blockquote p {\n color: #595959;\n}\n\n#nice blockquote::after {\n content: \"❞\";\n float: right;\n color: RGBA(64, 184, 250, .5);\n}\n\n/* 链接\n* border-bottom: 1px solid #009688;\n*/\n#nice a {\n color: #40B8FA;\n font-weight: normal;\n border-bottom: 1px solid #3BAAFA;\n}\n\n#nice strong::before {\n content: '「';\n}\n\n/* 加粗 */\n#nice strong {\n color: #3594F7;\n font-weight: bold;\n}\n\n#nice strong::after {\n content: '」';\n}\n\n/* 斜体 */\n#nice em {\n font-style: normal;\n color: #3594F7;\n font-weight:bold;\n}\n\n/* 加粗斜体 */\n#nice em strong {\n color: #3594F7;\n}\n\n/* 删除线 */\n#nice del {\n color: #3594F7;\n}\n\n/* 分隔线\n* 粗细、样式和颜色\n* border-top:1px solid #3e3e3e;\n*/\n#nice hr {\n height: 1px;\n padding: 0;\n border: none;\n border-top: 2px solid #3BAAFA;\n}\n\n/* 图片\n* 宽度 width:80%;\n* 居中 margin:0 auto;\n* 居左 margin:0 0;\n*/\n#nice img {\n border-radius: 6px;\n display: block;\n margin: 20px auto;\n object-fit: contain;\n box-shadow:2px 4px 7px #999;\n}\n\n/* 图片描述文字 */\n#nice figcaption {\n display: block;\n font-size: 13px;\n color: #2b2b2b;\n}\n\n#nice figcaption:before{\n content:'';\n\tbackground-image:url(https://img.alicdn.com/tfs/TB1Yycwyrj1gK0jSZFuXXcrHpXa-32-32.png);\n display:inline-block;\n width:18px;\n height:18px;\n background-size:18px;\n\tbackground-repeat:no-repeat;\n background-position:center;\n margin-right:5px;\n margin-bottom:-5px;\n}\n\n/* 行内代码 */\n#nice p code,\n#nice li code {\n color: #3594F7;\n background: RGBA(59, 170, 250, .1);\n display:inline-block;\n padding:0 2px;\n border-radius:2px;\n height:21px;\n line-height:22px;\n}\n\n/* 非微信代码块\n* 代码块不换行 display:-webkit-box !important;\n* 代码块换行 display:block;\n*/\n#nice .code-snippet__fix {\n background: #f7f7f7;\n border-radius: 2px;\n}\n\n#nice pre code {\n letter-spacing: 0px;\n}\n\n/*\n* 表格内的单元格\n* 字体大小 font-size: 16px;\n* 边框 border: 1px solid #ccc;\n* 内边距 padding: 5px 10px;\n*/\n#nice table tr th,\n#nice table tr td {\n font-size: 14px;\n color: #595959;\n}\n\n#nice .footnotes {\n background: #F6EEFF;\n padding: 20px 20px 20px 20px;\n font-size: 14px;\n border: 0.8px solid #DEC6FB;\n border-radius: 6px;\n border: 1px solid #DEC6FB;\n}\n\n/* 脚注文字 */\n#nice .footnote-word {\n font-weight: normal;\n color: #595959;\n}\n\n/* 脚注上标 */\n#nice .footnote-ref {\n font-weight: normal;\n color: #595959;\n}\n\n/*脚注链接样式*/\n#nice .footnote-item em {\n font-size: 14px;\n color: #595959;\n display: block;\n}\n\n#nice .footnotes{\n background: RGBA(53, 148, 247, .4);\n padding: 20px 20px 20px 20px;\n font-size: 14px;\n border-radius: 6px;\n border: 1px solid RGBA(53, 148, 247, 1);\n}\n\n/* \"参考资料\"四个字\n* 内容 content: \"参考资料\";\n*/\n#nice .footnotes-sep:before {\n content: 'Reference';\n color: #595959;\n letter-spacing: 1px;\n border-bottom: 2px solid RGBA(64, 184, 250, 1);\n display: inline;\n background: linear-gradient(white 60%, RGBA(64, 184, 250, .4) 40%);\n font-size: 20px;\n}\n\n/* 参考资料编号 */\n#nice .footnote-num {}\n\n/* 参考资料文字 */\n#nice .footnote-item p {\n color: #595959;\n font-weight: bold;\n}\n\n/* 参考资料解释 */\n#nice .footnote-item p em {\n font-weight: normal;\n}\n\n/* 行间公式\n* 最大宽度 max-width: 300% !important;\n*/\n#nice .block-equation svg {}\n\n/* 行内公式\n*/\n#nice .inline-equation svg {}\n\n/* 滑动图片\n */\n#nice .imageflow-img {\n display: inline-block;\n width:100%;\n margin-bottom: 0;\n}",
        article: "https://mp.weixin.qq.com/s/_lO3cd0FcF0Dg3TRnHPdwg",
        html: null,
        exampleHtml: null,
        authorName: "Nealyang",
        authorId: null,
        description: "全栈蓝的作者很懒，暂时没有描述",
        checked: true,
        userThemeId: null,
        createTime: "2020-04-04T12:15:33.000+0000",
        updateTime: "2020-04-12T19:58:03.000+0000",
      },
    ],
    pageNum: 18,
  },
};
