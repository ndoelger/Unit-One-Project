$(() => {
  $title = $(".overlay");

  $title.on("mouseover", function () {
    $(this).css("opacity", "1");
  });
  $title.on("mouseout", function () {
    $(this).css("opacity", "0");
  });

  $headers = $("h1, h2");
  console.log($headers);
  $headers.on("mouseover", function () {
    $(this).css("color", "#b6d98d");
  });
  $headers.on("mouseout", function () {
    $(this).css("color", "#dfe6ec");
  });

  $icons = $("header img");
  $icons.on("mouseover", function () {
    $(this).css("opacity", ".6");
  });
  $icons.on("mouseout", function () {
    $(this).css("opacity", "1");
  });

  $button = $("button");
  $button.on("mouseover", function () {
    $(this).css({
      "background-color": "#b6d98d",
      cursor: "pointer",
      color: "black",
    });
  });
  $button.on("mouseout", function () {
    $(this).css({
      "background-color": "#586c80",
      cursor: "pointer",
      color: "white",
    });
  });
});
