{foreach $data.models as $i => $position}
<li>
  <a href="board.html?id={$position.attributes.id}" circle_id="{$position.attributes._id}">
    <br>{$position.attributes.name} </br>
    {$position.attributes.user}{$position.attributes._id}
  </a>
</li>
{foreachelse}
No data
{/foreach}

