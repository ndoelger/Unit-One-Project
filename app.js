$(() => {
  $block = $(".block");
  $title = $(".title");

  $title.on("mouseover", function () {
    $(this).css("opacity", "1");
  });
  $title.on("mouseout", function () {
    $(this).css("opacity", "0");
  });
});
