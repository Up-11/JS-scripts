-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#  ScrollToTop(Important things)
## all stuff for scrolltotop button

--CSS--

	#scroll-to-top {

	position: fixed;
	bottom: 20px;
	right: 20px;
	background-color: #131417;
	color: white;
	width: 50px;
	height: 50px;

	text-align: center;
	border-radius: 50%;
	border: none;

	z-index: 1000;
	opacity: 0;
	transition: opacity 0.3s ease-in-out;
	}
	#scroll-to-top:hover {

	transform: scale(1.05);
	}
	#scroll-to-top.show {

	opacity: 1;
	pointer-events: auto;
	}

--HTML--
    
    <button id="scroll-to-top">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-arrow-up-short"
                    viewBox="0 0 16 16"
                >
                    <path
                        fill-rule="evenodd"
                        d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"
                    />
                </svg>
            </button>

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# Antmation(Important things)
## all stuff for animations

--CSS--

	.element-animation {

	opacity: 0;
	transform: translateY(20px);
	}

	.element-animation.element-show {

	opacity: 1;
	transition: all 1.5s ease-in-out;
	transform: translateY(0%);
	}

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

