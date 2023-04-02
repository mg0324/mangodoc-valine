# mangodoc-valine
mangodoc toc plugin，文章目录插件！

[![npm](https://img.shields.io/npm/v/mangodoc-plugin-toc.svg?style=flat-square)](https://www.npmjs.com/package/mangodoc-toc)

![示例](demo.png)


## Usage

1. [Applay valine](https://valine.js.org/quickstart.html) ，申请 valine

2. Configure mangodoc-valine:
```
  <script>
  window.$mangodoc = {
    valine:{
      appId: "",
      appKey: "",
      // other key in https://valine.js.org/configuration.html
    },
  }
  </script>
```

3. Insert script into docsify document:
```
<!-- 评论  -->
<script src='//cdn.jsdelivr.net/npm/valine/dist/Valine.min.js'></script>
<script src="https://unpkg.com/mangodoc-valine@1.0.0/dist/mangodoc-valine.min.js"></script>
```