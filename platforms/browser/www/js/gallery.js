    var cartoon1 = [
        {
            src: 'img/naruto/naruto-001.jpg',
            w: 754,
            h: 1100
        },
        {
            src: 'img/naruto/naruto-002.jpg',
            w: 754,
            h: 1100
        },
        {
            src: 'img/naruto/naruto-003.jpg',
            w: 754,
            h: 1100
        },

    ];
    var cartoon2 = [
        {
            src: 'img/bleach/bleach-001.jpg',
            w: 677,
            h: 1014
        },
        {
            src: 'img/bleach/bleach-002.jpg',
            w: 1200,
            h: 884
        },
        {
            src: 'img/bleach/bleach-003.jpg',
            w: 675,
            h: 1016
        },
        {
            src: 'img/bleach/bleach-004.jpg',
            w: 685,
            h: 1100
        },

    ];
    var cartoon3 = [
        {
            src: 'img/one-piece/one-piece-001.jpg',
            w: 1200,
            h: 884
        },
        {
            src: 'img/one-piece/one-piece-002.jpg',
            w: 546,
            h: 885
        },
        {
            src: 'img/one-piece/one-piece-003.jpg',
            w: 700,
            h: 1100
        },
        {
            src: 'img/one-piece/one-piece-004.jpg',
            w: 1200,
            h: 911
        },
        {
            src: 'img/one-piece/one-piece-005.jpg',
            w: 725,
            h: 1100
        },
        {
            src: 'img/one-piece/one-piece-006.jpg',
            w: 725,
            h: 1100
        }

    ];

        
    var cartoon4 = [
        {
            src: 'img/dragonball/dragon-ball-001.jpg',
            w: 750,
            h: 1127
        },
        {
            src: 'img/dragonball/dragon-ball-002.jpg',
            w: 750,
            h: 1127
        },
        {
            src: 'img/dragonball/dragon-ball-003.jpg',
            w: 750,
            h: 1127
        },
        {
            src: 'img/dragonball/dragon-ball-004.jpg',
            w: 750,
            h: 1127
        },
        {
            src: 'img/dragonball/dragon-ball-005.jpg',
            w: 750,
            h: 1127
        }

    ];
    
    var custom1 = [];
    var custom2 = [];

    var openPhotoSwipe = function(items) {
        
        if(items.length == 0) {
            alert('empty');
            return;
        }
        
        var pswpElement = document.querySelectorAll('.pswp')[0];

        // define options (if needed)
        var options = {
            history: false,
            focus: false,
            timeToIdle: 0,
            showAnimationDuration: 0,
            hideAnimationDuration: 0

        };
        
        swipe = true;

        gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
        
        gallery.listen('close', function() {
            swipe = false;
            $.mobile.pageContainer.pagecontainer("change", "#home");
        });
        
    };

