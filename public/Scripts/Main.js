﻿$('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: 300,
    isFitWidth: true,
    gutter: 10
});

var $grid = $('.grid').masonry({
    // options...
});
// layout Masonry after each image loads
$grid.imagesLoaded().progress(function () {
    $grid.masonry('layout');
});

$(document).ready(function () {
    var scroll_start = 0;
    var startchange = $('#recipeList');
    var offset = startchange.offset();
    $(document).scroll(function () {
        scroll_start = $(this).scrollTop();
        if (scroll_start > offset.top - 125) {
            $('#navigationBar').addClass("nav-scrolled");
        } else {
            $('#navigationBar').removeClass("nav-scrolled");;
        }
    });
});
$(document).ready(function () {
    $("#menuModalOpen").click(function () {
        $("#rightModal").modal();
    });
});
$(document).ready(function () {
    $("#menuModalOpenLeft").click(function () {
        $("#leftModal").modal();
    });
});

$("input:checkbox").on('click', function () {
    var $box = $(this);
    if ($box.is(":checked")) {
        var group = "input:checkbox[name='" + $box.attr("name") + "']";
        $(group).prop("checked", false);
        $box.prop("checked", true);
    } else {
        $box.prop("checked", false);
    }
});

$("#clearFilter").on("click", function () {
    $(".input-excluded, .input-included").each(function () {
        $(this).prop('checked', false);
    });
});