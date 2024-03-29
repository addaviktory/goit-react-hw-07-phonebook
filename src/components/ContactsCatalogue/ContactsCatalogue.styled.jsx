import styled from '@emotion/styled';

export const Button = styled.button`
    ransition: background-color 0.5s ease;
    outline: none;
    border: none;
    height: 28px;
    background-color: #aaaaaa8a;
    width: 75px;
    border-radius: 8px;

  &:hover {
    background-color: #715b4b;
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;

  border-bottom: 2px solid #b7a99f;
`;

export const NameContainer = styled.div`
  display: flex;
`;

export const NamePrg = styled.p`
  width: 300px;
  height: 30px;
`;