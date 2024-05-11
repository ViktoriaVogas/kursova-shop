$(document).ready(function(){

    $(".slide-btn").animate({width: '550px'}, 1000);

    $(".slide-text > h1").animate({fontSize : '100px'}, 1500);

    $(".m6").animate({
        marginRight: '200px',
        fontSize: '20px'
    }, 1000 );

    $(".head-moto-img").click(function(){
        $(this).animate({height: '300px', opacity: '0.4'}, 'slow');
        $(this).animate({width: '300px', opacity: '0.8'}, 'slow');
        $(this).animate({height: '100px', opacity: '0.4'}, 'slow');
        $(this).animate({width: '100px', opacity: '1'}, 'slow');

    })

    $(".blog-post-date").mouseenter(function(){
        $("+.blog-post-info>.post-head", this).animate({
            marginLeft:'300px',
            opacity: '0.4',
            fontSize: '0.7em'
        });
        $(">span",this).animate({
            width: '120px',
            height:'120px'
        })
    })

    $(".blog-post-date").mouseleave(function(){
        $("+.blog-post-info>.post-head", this).animate({
            marginLeft:'0',
            opacity: '1',
            fontSize: '1em'
        });
        $(">span",this).animate({
            width: '90px',
            height:'90px'
        })
    })

})