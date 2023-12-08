// Shop page Section
$(document).ready(function () {
    var changebox = $(".changebox");

    var firstclone = changebox.children(":first").clone();
    changebox.append(firstclone);

    var fsstr = changebox.parent().css("font-size");
    fsstr = fsstr.slice(0, fsstr.indexOf("p"));
    var fs = parseInt(fsstr);

    changebox.css("height", changebox.parent().css("font-size"));
    ChangeSize(0);
    setInterval(Next, 2000);

    function Next() {
        if (typeof Next.i == 'undefined') {
            Next.i = 0;
        }
        Next.i++;
        if (Next.i == changebox.children("span").length) {
            Next.i = 1;
            changebox.scrollTop(0);
        }
        changebox.animate({ scrollTop: (fs * Next.i) + Next.i * 5 + 3 }, 500);
        setTimeout(function () {
            ChangeSize(Next.i);
        }, 500);

    }

    function ChangeSize(i) {
        var word = changebox.children("span").eq(i);
        var wordsize = word.css("width");
        changebox.css("width", wordsize);
    }


});
