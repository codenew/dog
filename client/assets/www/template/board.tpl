<div class="board-face">
  <img src="{$user.protrait}" width="32" height="32"/>
</div>
<div class="board-content">
  {$model.name}:
  <a href="#" threadid="{$model._id}">
    {$model.content} <br>
    {$model.user}
    <span class="DEBUGINFO">{$model._id}</span>
  </a>
</div>
<hr>
