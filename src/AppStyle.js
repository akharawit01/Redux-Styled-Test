import styled from 'styled-components';

const appStyle = styled.div`
  font-family: monospace;

  & .container {
    max-width: 960px;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }

  & button {
    cursor: pointer;
    display: inline-block;
    font-weight: 400;
    color: #212529;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    color: #fff;
    background-color: ${props => props.theme.btnBG};
    border-color: ${props => props.theme.btnBG};
    margin: 15px 5px 15px 0;
    &:disabled {
      background-color: #4f5254;
      cursor: auto;
    }
  }

  & form {
    & label {
      display: block;
    }
    & input[type=text] {
      display: block;
      width: 100%;
      height: calc(1.25rem + 2px);
      padding: .375rem .75rem;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      color: #495057;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #ced4da;
      border-radius: .25rem;
    }
  }

  & ul {
    list-style: none;
    padding: 0;
    & >li {
      display: flex;
      align-items: baseline;
      background: ${props => props.theme.listBG};
      padding: 0 15px;
      color: #fff;
      border-bottom: 1px solid #fff;
      &>span {
        display: inline-block;
        width: 100%;
        font-size: 2rem;
      }
    }
  }

  .ml-auto {
    margin-left: auto;
  }
  
  .empty-data {
    font-size: 2rem;
    background: ${props => props.theme.listBG};
    padding: 20px 5px;
    color: white;
  }
`;

export default appStyle;