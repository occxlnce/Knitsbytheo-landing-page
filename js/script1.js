/* Please ❤ this if you like it! */



	$(document).ready(function() {	
		
		/* Hero Case study images */			
		
		$('.link-list li:nth-child(1)').on('mouseenter', function() {
			$('.link-list li.active').removeClass('active');
			$('.img-list li.show').removeClass("show");
			$('.img-list li:nth-child(1)').addClass("show");
			$('.link-list li:nth-child(1)').addClass('active');
		})
		$('.link-list li:nth-child(2)').on('mouseenter', function() {
			$('.link-list li.active').removeClass('active');
			$('.img-list li.show').removeClass("show");
			$('.img-list li:nth-child(2)').addClass("show");
			$('.link-list li:nth-child(2)').addClass('active');
		})
		$('.link-list li:nth-child(3)').on('mouseenter', function() {
			$('.link-list li.active').removeClass('active');
			$('.img-list li.show').removeClass("show");
			$('.img-list li:nth-child(3)').addClass("show");
			$('.link-list li:nth-child(3)').addClass('active');
		})
		$('.link-list li:nth-child(4)').on('mouseenter', function() {
			$('.link-list li.active').removeClass('active');
			$('.img-list li.show').removeClass("show");
			$('.img-list li:nth-child(4)').addClass("show");
			$('.link-list li:nth-child(4)').addClass('active');
		})
		$('.link-list li:nth-child(5)').on('mouseenter', function() {
			$('.link-list li.active').removeClass('active');
			$('.img-list li.show').removeClass("show");
			$('.img-list li:nth-child(5)').addClass("show");
			$('.link-list li:nth-child(5)').addClass('active');
		})
		$('.link-list li:nth-child(1)').trigger('mouseenter')   
		
	});


	
	//Page cursors

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
      t.style.left = n.clientX + "px", 
		t.style.top = n.clientY + "px", 
		e.style.left = n.clientX + "px", 
		e.style.top = n.clientY + "px", 
		i.style.left = n.clientX + "px", 
		i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }