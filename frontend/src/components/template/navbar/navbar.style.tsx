import styled from 'styled-components';

export const NavContainer = styled.div`
  margin-bottom: 30px;

  .navbar {
    height: 75px;

    .container-fluid {
      max-width: 1700px;
    }

    .navbar-nav{
      .nav-link.active {       
      font-weight: bold; 
    } 

    .nav-link {
    font-size: 16px; 
      
    :hover, :focus {
      padding-bottom: 6px;       
      color: #333;
      border-bottom: 2px solid #333;
    }
  }
   }
  }

  .right-elements {
   a {
    font-size: 15px; 
    color: #222;
    text-decoration: none;
   }

   a:hover {             
      color: #555;      
    }
 }

  a.navbar-brand {
    text-align: center;
    font-size: 20px;
    color: #030e30;
    padding: 0;

    :hover,
    :focus {
      text-decoration: none;
      opacity: 1;
    }
  }
`