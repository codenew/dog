<div>
  <span class="user-portrait">
    <img src="{$model.protrait}" width="100" height="100"/>
  </span>
  <span class="user-content">
    <p>昵称: {$model.nickname}</p>
    <div id="userExp"></div>
    <div>
      <span class="attr-info" style="width:5em;">等级: {$model.level}</span>
      <span class="attr-info">金钱: {$model.money}</span>
    </div>
    <div>
      <span class="attr-info" style="width:5em;">圈子: {$model.circleCount}/{$model.maxCircleCount}</span>
      <span class="attr-info"> 宠物: {$model.petCount}/{$model.maxPetCount}</span>
    </div>
  </span>
</div>
