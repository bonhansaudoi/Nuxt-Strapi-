<template>
	<div>   
    <form-Message-V>
      <!-- {{ message }}  --> 
    </form-Message-V> 

		<main>  
			<client-only> 
				<Navbar
					:logo="logo"  
					:menuLink="menuLink"
					:dropdown="dropdown"
				>
					<icon-SearchIcon/>
 
					<NavbarIcon/> 

					<NavbarAuth />
				</Navbar>
			</client-only>

			<Nuxt />  

			<post-Top-V />
		</main>    	
	</div> 	 
</template>

<script>   
export default { 
	data () {
		return {  
			// props: { 
			// 	isMessageV: Boolean,
			// 	message: String
			// }, 

			/*  
			props: {
				error: {
					type: Object,
					default: () => {},
				},
			},
			*/
			logo: { 
				text: '4WAO',
				link: '/' 
      },
      menuLink: [
        {
          navbarLink: [         
            {
              text: "home",
              link: "/"
            }, 
          ]
        } 
			],  
			dropdown: [
				{
					text: "topic", 
					content: [
						{
							text: "", 
							link: "" 
						}   
					]
				},
				{	  
					text: "category", 
					content: [
						{
							text: "", 
							link: "" 
						}   
					] 
				} 
			]   
    }  
  },
  head() {
		return {
			script: [ 
				{
				  src: "" 
				}
			],
			link: [
				{
					rel: "stylesheet",
					href: ""
				 
				}
			]
		}
  }  
};  
</script> 

<style lang="postcss">
body {@apply text-gray-400 bg-black md:bg-red-100 lg:bg-white;} 
/* Navbar */
.navbar {@apply text-gray-400 bg-black;} 
.navbar-logo {@apply lg:mr-8; 
	& .logo {@apply text-orange-500 hover:text-white; 
		& svg {@apply h-8 w-8 mr-2;}  
	}
	& .hamberger svg {@apply hover:text-green-500 focus:text-green-500;} 
}
.navbar-menu {@apply pt-20 lg:p-0 pb-6;}  
.navbar-link{
	& a {@apply p-2 lg:px-4 hover:text-white hover:bg-gray-900;}
}  
.dropdown	{@apply hover:text-white hover:bg-gray-900; 
	& .dropdown-content {@apply bg-indigo-200;} 
	& a {@apply hover:text-red-500 focus:text-red-500;} 
}  
.navbar-right {
	& .search {@apply top-20 left-8 ;} 
	& .btn-cart {@apply hover:text-white;} 
	& .navbar-auth {
/* 		& .authed {
			& .icon{@apply text-yellow-600;}
		}  */
		& .icon-auth {@apply hover:text-white;}  
	} 
}   

/* Sidebar */
.sidebar {@apply bg-black; 
	& a, & .sidebar-btn {@apply hover:text-white hover:bg-gray-900 focus:text-green-500;}
	& .sidebar-content {
		@apply bg-indigo-200; 
		& a {@apply bg-transparent hover:text-red-500 focus:text-red-500;}
	}  
}  

/* form-modal */ 
.form-modal {@apply space-y-4 lg:space-y-6 text-base;	
	& h2 {@apply text-center uppercase;}    
	& .form-fields {@apply space-y-4 lg:space-y-6;
	/* text-white */
		& .field {@apply space-y-2 ;
			& input { @apply w-full py-1 lg:py-2 lg:px-4 border-2 rounded border-gray-200} 			
		}
	}
	& .forgot-psw {@apply text-xs lg:text-sm text-red-400 hover:text-white;}  
	& button {@apply py-1 px-4 lg:py-2 lg:px-6 text-lg lg:text-xl text-center text-white bg-blue-700;}   
}  

/* Accordion-V */ 
.readmore .icon {@apply text-red-500;}   
</style>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
