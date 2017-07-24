$(function(){

    var skillsHeight     = $('section.skills').outerHeight(true) + 22,  /* Padding bottom of 20px and border bottom of 2px */
        showcaseHeight   = $('section.showcase').outerHeight(true) + 2, /* Border bottom of 2px */
        experienceHeight = $('section.experience').outerHeight(true) + 2, /*  Border bottom of 2px */
        contactHeight    = $('section.contact').outerHeight(true),
        headerHeight     = $('.header').outerHeight(true) + 2,
        bottomPage       = $('html').height();
    

    showcaseTop     = 0;
    showcaseBottom  = showcaseTop + showcaseHeight - headerHeight;

    console.log('Top: ' + showcaseTop + ' Bottom: ' + showcaseBottom);

    experienceTop    = showcaseBottom;
    experienceBottom = experienceTop + experienceHeight;
    console.log('Top: ' + experienceTop + ' Bottom: ' + experienceBottom);

    skillsTop = experienceBottom;
    skillsBottom = skillsTop + skillsHeight;
    console.log('Top: ' + skillsTop + ' Bottom: ' + skillsBottom);

    contactTop = skillsBottom;
    console.log('Top: ' + contactTop );

    $(window).on('resize', function(){
        skillsHeight     = $('section.skills').outerHeight(true) + 22,  /* Padding bottom of 20px and border bottom of 2px */
        showcaseHeight   = $('section.showcase').outerHeight(true) + 2, /* Border bottom of 2px */
        experienceHeight = $('section.experience').outerHeight(true) + 2, /*  Border bottom of 2px */
        contactHeight    = $('section.contact').outerHeight(true),
        headerHeight     = $('.header').outerHeight(true) + 2;


        showcaseTop     = 0;
        showcaseBottom  = showcaseTop + showcaseHeight - headerHeight;

        console.log('Top: ' + showcaseTop + ' Bottom: ' + showcaseBottom);

        experienceTop    = showcaseBottom;
        experienceBottom = experienceTop + experienceHeight;
        console.log('Top: ' + experienceTop + ' Bottom: ' + experienceBottom);

        skillsTop = experienceBottom;
        skillsBottom = skillsTop + skillsHeight;
        console.log('Top: ' + skillsTop + ' Bottom: ' + skillsBottom);

        contactTop = skillsBottom;
        console.log('Top: ' + contactTop );        
    });
    
    var scrollTop = $(window).scrollTop();
    // Showcase
    if ( scrollTop >= showcaseTop && scrollTop < showcaseBottom )
    {
        $('header nav li').removeClass('current');
        $('header nav li:first-child').addClass('current');
    }
    // Experience
    if ( scrollTop >= experienceTop && scrollTop < experienceBottom )
    {
        $('header nav li').removeClass('current');
        $('header nav li:nth-child(2)').addClass('current');
    }
    // Skills
    if ( scrollTop >= skillsTop && scrollTop < skillsBottom )
    {
        $('header nav li').removeClass('current');
        $('header nav li:nth-child(3)').addClass('current');
    }
    // Contact
    if ( $(window).scrollTop() + $(window).height() == $(document).height() )
    {
        $('header nav li').removeClass('current');
        $('header nav li:nth-child(4)').addClass('current');
    }
    
    $(window).scroll(function (event) {
        var scrollTop = $(this).scrollTop();
        

        // Showcase
        if ( scrollTop >= showcaseTop && scrollTop < showcaseBottom )
        {
            $('header nav li').removeClass('current');
            $('header nav li:first-child').addClass('current');
        }
        // Experience
        if ( scrollTop >= experienceTop && scrollTop < experienceBottom )
        {
            $('header nav li').removeClass('current');
            $('header nav li:nth-child(2)').addClass('current');
        }
        // Skills
        if ( scrollTop >= skillsTop && scrollTop < skillsBottom )
        {
            $('header nav li').removeClass('current');
            $('header nav li:nth-child(3)').addClass('current');
        }
        // Contact
        if ( $(window).scrollTop() + $(window).height() == $(document).height() )
        {
            $('header nav li').removeClass('current');
            $('header nav li:nth-child(4)').addClass('current');
        }
        
    });
    

    $('.skills .row .skill').each(function(index, element){
        var skill = $(this).text().trim();
        var rate  = "0%";
        
        if ( skill == 'PHP' ){ rate = "90%"; }
        if ( skill == 'Java' ){ rate = "50%"; }
        if ( skill == 'Javascript' ){ rate = "90%"; }
        if ( skill == 'HTML5' ){ rate = "90%"; }
        if ( skill == 'CSS3' ){ rate = "90%"; }
        if ( skill == 'SASS' ){ rate = "90%"; }
        if ( skill == 'Typescript' ){ rate = "75%"; }
        if ( skill == 'JSON' ){ rate = "100%"; }
        if ( skill == 'SQLServer' ){ rate = "60%"; }
        if ( skill == 'PostgreSQL' ){ rate = "80%"; }
        if ( skill == 'MySQL' ){ rate = "60%"; }
        if ( skill == 'PhalconPHP' ){ rate = "75%"; }
        if ( skill == 'Slim' ){ rate = "75%"; }
        if ( skill == 'Codeigniter' ){ rate = "75%"; }
        if ( skill == 'Laravel' ){ rate = "50%"; }
        if ( skill == 'JWT' ){ rate = "80%"; }
        if ( skill == 'FlexboxGrid' ){ rate = "75%"; }
        if ( skill == 'Bootstrap' ){ rate = "75%"; }
        if ( skill == 'Semantic UI' ){ rate = "60%"; }
        if ( skill == 'jQuery UI' ){ rate = "70%"; }
        if ( skill == 'jQuery' ){ rate = "80%"; }
        if ( skill == 'GulpJS' ){ rate = "80%"; }
        if ( skill == 'Git' ){ rate = "80%"; }
        if ( skill == 'Tortoise SVN' ){ rate = "75%"; }
        if ( skill == 'MVC Pattern' ){ rate = "100%"; }
        if ( skill == 'SOAP Web Services' ){ rate = "75%"; }
        if ( skill == 'RESTful API' ){ rate = "100%"; }
        if ( skill == 'AngularJS' ){ rate = "70%"; }
        if ( skill == 'Angular' ){ rate = "90%"; }
        if ( skill == 'NodeJS' ){ rate = "75%"; }
        if ( skill == 'Express' ){ rate = "75%"; }
        if ( skill == 'Composer' ){ rate = "75%"; }
        if ( skill == 'NPM' ){ rate = "75%"; }
        if ( skill == 'OOP' ){ rate = "100%"; }
        if ( skill == 'Spanish (Native)' ){ rate = "100%"; }
        if ( skill == 'English' ){ rate = "70%"; }
        if ( skill == 'Chrome' ){ rate = "100%"; }
        if ( skill == 'Firefox' ){ rate = "80%"; }
        if ( skill == 'MS Office' ){ rate = "75%"; }
        if ( skill == 'Notepad++' ){ rate = "75%"; }
        if ( skill == 'Windows' ){ rate = "100%"; }
        if ( skill == 'XAMPP' ){ rate = "100%"; }
        if ( skill == 'WAMP' ){ rate = "100%"; }
        if ( skill == 'Sublime Text' ){ rate = "100%"; }
        if ( skill == 'Visual Studio Code' ){ rate = "100%"; }
        if ( skill == 'Netbeans' ){ rate = "80%"; }

        $(this).next().rateYo({
            starWidth: "15px",
            rating: rate,
            ratedFill: "#d65555",
            readOnly: true
        });
    });



    $('.header nav ul li a').on('click', function(e){
        
        e.preventDefault();
        var selected = $(this).text();
        if ( selected == 'Skills' )
        {
            $(window).scrollTop(skillsTop + 1);
        }
        if ( selected == 'Profile')
        {
            $(window).scrollTop(showcaseTop + 1);
        }
        if ( selected == 'Experience' )
        {
            $(window).scrollTop(experienceTop + 1);
        }
        if ( selected == 'Contact' )
        {
            $(window).scrollTop(contactTop + 1);
        }
        
    });





});

