function dragElement(element){
    console.log("test");
    console.log(element);
    $(element).on("mousedown", function(e){

        let element = $(this);
        
        let draggable = $(this).addClass("draggable");
        height = element.outerHeight(),
        width = element.outerWidth(),
        y = element.offset().top + height - e.pageY,
        x = element.offset().left + width - e.pageX;
        $(draggable).parents().on("mousemove", function(e){           
            $(".draggable").offset({
                top:e.pageY + y - height,
                left:e.pageX + x - width
            }).on("mouseup", function() {
                $(this).removeClass('draggable');
            });
        })
    }).on("mouseup", function(){
        $(this).removeClass("draggable");
    });
    
}

$(document).ready(function(){
    let showcaseElement = '<div style="width:100px; height:100px; background-color:#92a8d1; border:1px solid;"></div>';
    $("input[name='elemCount']").on("input",function(){
        let field = $(".dragable-field");
        field.empty();
        for(let i = 0; i < $(this).val(); i++){
            console.log(i);
            field.append($(showcaseElement));
        }
        dragElement('.dragable-field div');
    })
    dragElement('.dragable-field div');
})
