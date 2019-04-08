$(function() {
  var mySwiper = new Swiper('.swiper-container', {
    // direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination'
    },

    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }

    // 如果需要滚动条
    // scrollbar: {
    //   el: '.swiper-scrollbar'
    // }
  })

  // 点击返回顶部的图片，返回顶部
  // $(window).scroll(function() {
  //   if ($(window).scrollTop() > 100) {
  //     $('#backtop').fadeIn(1500)
  //   } else {
  //     $('#backtop').fadeOut(1500)
  //   }
  // })

  $('.backtop').click(function() {
    $('body,html').animate({ scrollTop: 0 }, 1000)
  })

  // 一款保险是如何成为爆款的
  // 点击ABCD进行高亮
  $('.chooseBox1').click(function() {
    $('.chooseBox1').removeClass('active')
    $(this).addClass('active')
  })

  $('.chooseBox2').click(function() {
    $('.chooseBox2').removeClass('active')
    $(this).addClass('active')
  })
  $('.chooseBox3').click(function() {
    $('.chooseBox3').removeClass('active')
    $(this).addClass('active')
  })

  $('.chooseBox4').click(function() {
    $('.chooseBox4').removeClass('active')
    $(this).addClass('active')
  })

  // 中华尊终身寿险
  $('.longLifeTabItem1').click(function() {
    $(this)
      .addClass('active')
      .siblings()
      .removeClass('active')
    $('.longLifeTabCont1')
      .show()
      .siblings()
      .hide()
  })
  $('.longLifeTabItem2').click(function() {
    $(this)
      .addClass('active')
      .siblings()
      .removeClass('active')
    $('.longLifeTabCont2')
      .show()
      .siblings()
      .hide()
  })
  $('.longLifeTabItem3').click(function() {
    $(this)
      .addClass('active')
      .siblings()
      .removeClass('active')
    $('.longLifeTabCont3')
      .show()
      .siblings()
      .hide()
  })
  // 点击预约投保，显示模态框
  $('.goInsureLongLife').click(function() {
    $('.longLifeMask').show()
  })
  // 点击了模态框之后，就会让模态框消失
  $('.longLifeModal').click(function() {
    $('.longLifeMask').hide()
  })

  // 产品列表中的筛选按钮高亮问题
  $('.filterBtnItem').click(function() {
    $(this)
      .addClass('active')
      .siblings()
      .removeClass('active')
  })
  // $('.proListSearchBox').focus(function() {
  //   $('.proCenterMask1').show()
  // })
  // $('.proCenterModal1').click(function() {
  //   $('.proCenterMask1').hide()
  // })
  // $('.firstYear').click(function() {
  //   $('.proCenterMask2').show()
  // })
  // $('.proCenterModal2').click(function() {
  //   $('.proCenterMask2').hide()
  // })

  // $('.firstYear').click(function() {
  //   $('.proCenterMask2').show()
  // })
  // $('.proCenterModal2').click(function() {
  //   $('.proCenterMask2').hide()
  // })

  // $('.proListSearchBox1').focus(function() {
  //   $('.proCenterMask3').show()
  // })
  // $('.proCenterModal3').click(function() {
  //   $('.proCenterMask3').hide()
  // })

  // 首页 / 产品中心 点击首年佣金20 % 出现对应的表格模态框
  // 首页搜索框聚焦时，显示历史记录的模态框
  $('.indexSearch').focus(function() {
    $('.proCenterMask1').show()
  })
  // 首页点击历史记录模态框其他的部分，模态框消失
  $('.proCenterModal1').click(function() {
    $('.proCenterMask1').hide()
  })

  // 产品列表
  // 点击筛选，显示筛选的模态框
  $('.filterBox').click(function() {
    $('.proCenterMask1').show()
    $('.proCenterMask3').hide()
  })
  // 点击筛选的模态框其他的部分，模态框消失
  $('.proCenterModal2').click(function() {
    $('.proCenterMask2').hide()
  })
  // 输入框聚焦的时候,显示历史记录模态框
  $('.proListSearchBox').focus(function() {
    $('.proCenterMask3').show()
    $('.proCenterMask1').hide()
  })
  // 点击历史记录模态框其他的部分，模态框消失
  $('.proCenterModal3').click(function() {
    $('.proCenterMask3').hide()
  })
  $('.firstYear').click(function(e) {
    $('.proCenterMask2').show()
    window.event ? (window.event.cancelBubble = true) : e.stopPropagation()
  })
  $('.proCenterModal2').click(function() {
    $('.proCenterMask2').hide()
  })

  // 点击登录之后跳转到首页(产品中心)
  $('.loginBtn').click(function() {
    window.location.href = './productCenter.html'
    // alert(666)
  })
  // 点击产品列表的产品跳转到产品详情
  $('.proItem').click(function() {
    window.location.href = './longLifeInsure.html'
  })

  $('.goInsureLongLife1').click(function() {
    window.location.href = './bookSuccess.html'
  })
  $('.answerBtn').click(function() {
    window.location.href = './productCenter.html'
    // alert(666)
  })
})
