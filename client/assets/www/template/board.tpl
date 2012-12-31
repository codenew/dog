{foreach $data.models as $i => $position}
<li>  
    <br>{$position.attributes.content} </br>
    {$position.attributes.user}{$position.attributes._id}  
</li>
{foreachelse}
ÔÝÎÞÊý¾Ý
{/foreach}

