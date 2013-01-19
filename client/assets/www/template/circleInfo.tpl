<span style="float:left; width:40%;">
  <img width="100%" height="100%" src="{$model.imgsrc}" />
</span>
<span style="">
  <div>圈主：
    <span id="circleOwner">{$owner.name}</span>
    <span><a href="#" id="mailToCircleOwner">私信</a></span>
  </div>
  <div id="circleAddr">地址：{$model.address}</div>
  <div>
    <span id="activeUser">附近人数：{$runtime.activeUserCount}</span>
    <span id="topicCount">话题数量：{$board.topicCount}</span>
  </div>
  <div>
    <span id="notice">公告：{$model.notice}</span>
  </div>
</span>
