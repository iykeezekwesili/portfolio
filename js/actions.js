window.addEventListener("DOMContentLoaded", function () {

            var scrollappears = document.querySelectorAll(".scrollappear")

            var media = window.matchMedia("(max-width:400px)")

            var offset

            if (media.matches) {

                offset = 50

            } else {

                offset = 100

            }

            document.onscroll = function () {

                scrollappears.forEach(function (scrollappear) {

                    var scrolltop = Math.ceil(window.pageYOffset)

                    var elemtop = Math.ceil(scrollappear.offsetTop)

                    if (scrolltop + (window.innerHeight - offset) >= elemtop) {

                        scrollappear.style.transform = "translateY(0px)"

                        scrollappear.style.opacity = 1

                        scrollappear.classList.add("once")

                    } else {

                        if (!scrollappear.classList.contains("once")) {

                            scrollappear.style.transform = "translateY(50px)"

                            scrollappear.style.opacity = 0

                        }

                    }

                })

            }

            placeme()

            function placeme() {

                var banner = document.querySelector(".banner")

                var me = document.querySelector(".me")

                var top = (banner.offsetHeight + (me.offsetHeight))

                me.style.top = top

            }

            /*******************************************************************

            TESTIMONIAL SLIDESHOW        

            *********************************************************************/

            getCopyrightYear()

            function getCopyrightYear() {

                var copy = document.getElementById("copy")

                var date = new Date()

                copy.append(date.getFullYear())

            }

            insertQuote()

            function insertQuote() {

                var msgs = document.querySelectorAll(".slide .msg")

                msgs.forEach(function (msg) {

                    var span = document.createElement("span")

                    msg.insertAdjacentHTML("afterbegin", "<i class='fas fa-quote-left mr-3 fa-2x text-warning'></i>")

                    msg.insertAdjacentHTML("beforeend", "<i class='fas fa-quote-right ml-3 fa-2x text-warning'></i>")

                })

            }

            var gallery = document.querySelector(".gallery")

            var slider = document.querySelector(".slider")

            var slides = document.querySelectorAll(".slide")

            var slideInterval = 5000

            var transitionDuration = 500

            slider.style.width = gallery.offsetWidth * slider.children.length

            var interval = setInterval(next, slideInterval)

            document.getElementById("next").addEventListener("click", next)

            function next(e) {

                slider.style.transitionDuration = transitionDuration / 1000 + "s"

                slider.style.marginLeft = ~gallery.offsetWidth + 1

                setTimeout(function () {

                    slider.insertAdjacentElement("beforeend", slider.firstElementChild)

                    slider.style.transitionDuration = "0s"

                    slider.style.marginLeft = 0

                }, transitionDuration)

                if (e != undefined) clearInterval(interval)

            }

            document.querySelector(".slider").addEventListener("swiped-right", prev)

            document.querySelector(".slider").addEventListener("swiped-left", next)

            document.getElementById("prev").addEventListener("click", prev)

            function prev() {

                slider.style.transitionDuration = "0s"

                slider.insertAdjacentElement("afterbegin", slider.lastElementChild)

                slider.style.marginLeft = ~gallery.offsetWidth + 1

                setTimeout(function () {

                    slider.style.transitionDuration = transitionDuration / 1000 + "s"

                    slider.style.marginLeft = 0

                }, 1)

                if (e != undefined) clearInterval(interval)

            }

            gallery.addEventListener("mouseover", function (e) {

                if (e != undefined) clearInterval(interval)

            })

            var togggleMenu = document.querySelector("#togggleMenu")

            var overlay = document.querySelector(".mobile-overlay")

            var menu = document.querySelector("menu")

            togggleMenu.addEventListener("click", function () {

                if (menu.getAttribute("data-hide") == "hide") {

                    openMenu()

                } else {

                    closeMenu()

                }

            })

            overlay.addEventListener("click", function () {

                closeMenu()

            })

            function closeMenu() {

                menu.style.left = "-100%"

                overlay.style.background = "rgba(0,0,0,0)"

                menu.setAttribute("data-hide", "hide")

                document.body.style.overflow = "auto"

                setTimeout(function () {

                    overlay.style.display = "none"

                }, 300)

            }

            function openMenu() {

                menu.style.left = "0%"

                overlay.style.display = "block"

                document.body.style.overflow = "hidden"

                menu.setAttribute("data-hide", "show")

                setTimeout(function () {

                    overlay.style.background = "rgba(0,0,0,0.7)"

                }, 0)

            }

        })
