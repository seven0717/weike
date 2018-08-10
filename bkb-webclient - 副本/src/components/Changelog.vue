<template>
  <el-col :span="24">
    <div class="page-changelog content">
      <div class="heading">
        更新日志
      </div>
      <ul class="timeline">
        <li>
          <h3>
            <span>1.0.4</span>
          </h3>
          <p>
            <em>2017-10-25</em>
          </p>
          <ul>
            <li>修复多用户登录菜单显示问题</li>
            <li>修复学校字段、鼠标码字段</li>
            <li>修复权限管理页面布局</li>
          </ul>
        </li>
        <li>
          <h3>
            <span>1.0.3</span>
          </h3>
          <p>
            <em>2017-10-20</em>
          </p>
          <ul>
            <li>对系统登录做了部分优化</li>
            <li>修复布局也中左侧菜单问题</li>
          </ul>
        </li>
        <li>
          <h3>
            <span>1.0.2</span>
          </h3>
          <p>
            <em>2017-06-15</em>
          </p>
          <ul>
            <li>对页面布局进行调整，美化页面样式</li>
            <li>新增权限管理和权限分配两个页面</li>
            <li>学校页面新增组织机构代码主键</li>
            <li>增加修改密码页面</li>
          </ul>
        </li>
        <li>
          <h3>
            <span>1.0.1</span>
          </h3>
          <p>
            <em>2017-06-02</em>
          </p>
          <ul>
            <li>左侧菜的单优化，对之前的bug进行修复。</li>
            <li>右上角的个人信息，将对布局进行优化，信息更简练。</li>
            <li>将增加备课帮后台管理系统的升级记录页面。</li>
            <li>对页面中的按钮（颜色、位置、效果等）进行优化。</li>
            <li>页面中的表单将增加验证功能，以防大家录错信息。</li>
          </ul>
        </li>
        <li>
          <h3>
            <span>1.0.0</span>
          </h3>
          <p>
            <em>2017-06-01</em>
          </p>
          <ul>
            <li>备课帮后台管理系统发布</li>
          </ul>
        </li>
      </ul>
    </div>
  </el-col>
</template>

<style scoped>
  .page-changelog{
    margin-left: 200px;
    margin-top: 50px;
  }
  .page-changelog .heading{
    margin-bottom: 40px;
  }
  .page-changelog .timeline{
    margin: 0 0 0 105px;
    padding-left: 25px;
    position: relative;
    color: #5e6d82;
  }
  .page-changelog .timeline:before {
    content: "";
    width: 1px;
    height: 100%;
    position: absolute;
    left: 0;
    top: 10px;
    background-color: #00af86;
  }
  ul.timeline {
    left: -33px;
    top: 10px;
    border: 0;
  }
  .page-changelog .timeline>li:first-child {
    margin-top: -10px;
  }
  .page-changelog .timeline>li:not(:last-child) {
    margin-bottom: 50px;
  }
  .page-changelog .timeline>li {
    list-style: none;
    position: relative;
    line-height: 1.8;
  }
  .page-changelog .timeline h3 {
    margin: 0 0 10px;
    font-weight: 400;
    color: #1f2f3d;
    font-size: 22px;
  }
  .page-changelog .timeline>li:first-child h3:before {
    left: -33px;
    top: 10px;
    width: 17px;
    height: 17px;
    background-color: #20a0ff;
    border: 0;
  }
  .page-changelog .timeline h3:before {
    content: "";
    display: block;
    position: absolute;
    left: -31px;
    top: 13px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background-color: transparent;
    border: 2px solid #20a0ff;
    box-sizing: border-box;
    background-color: #fff;
  }
  .page-changelog .timeline h3 span {
    opacity: 1;
    float: none;
    margin-left: 0;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
 }
  .page-changelog .timeline p {
    margin: 0;
    font-size: 14px;
    color: #5e6d82;
    line-height: 1.5em;
  }
  .page-changelog .timeline em {
    position: absolute;
    left: -127px;
    font-style: normal;
    top: 6px;
    font-size: 14px;
    color: #99a9bf;
  }
  .page-changelog .timeline ul {
    padding-left: 0;
  }
  .page-changelog .timeline li li {
    font-size: 14px;
    list-style: none;
    padding-left: 0;
    word-break: break-all;
    line-height: 1.8;
  }
  .page-changelog .timeline li li:before {
    content: "";
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #5e6d82;
    margin-right: 5px;
    display: inline-block;
    vertical-align: middle;
  }
</style>

