import { Button, Container, Select, styled, TextField, Typography } from "@mui/material";
// Styled Components - כל רכיב מקבל את הסטיילים שלו
export const AlbumContainer = styled(Container)`
  background: #0d0b45;
  color: #fff;
  border-radius: 3px;
  padding: 16px;
  box-shadow: 0px 4px 20px rgba(255, 20, 147, 0.5);
`;

export const Title = styled(Typography)`
  text-align: center;
  color: #ff1493;
`;

export const InputField = styled(TextField)`
  margin-bottom: 24px;
  background-color: #1a1b6d;
  border-radius: 8px;
  & .MuiInputBase-input {
    color: #fff;
  }
`;

export const BackgroundColorPicker = styled("input")`
  width: 50px;
  height: 30px;
  border: none;
  cursor: pointer;
`;

export const FrameSelector = styled(Select)`
  background-color: #1a1b6d;
  color: #fff;
  border-radius: 8px;
`;

interface AlbumAreaProps {
  background: string;
  templateImage: string;
}

export const AlbumArea = styled("div")<AlbumAreaProps>`
  position: relative;
  width: 90%;
  height: 700px;
  border: 2px dashed #ff1493;
  background-image: url(${(props) => props.templateImage});
  background-size: cover;
  background-color: ${(props) => props.background};
  margin: 20px auto;
`;

interface ImageWrapperProps {
  frame: string;
  blur: number;
  borderRadius: number;
  selected: boolean;
}

export const ImageWrapper = styled("div")<ImageWrapperProps>`
opacity:0;
  width: 100%;
  height: 100%;
  clip-path: ${(props) => props.frame};
  filter: blur(${(props) => props.blur}px);
  border-radius: ${(props) => props.borderRadius}px;
  overflow: hidden;
  border: ${(props) => (props.selected ? "2px solid #FF1493" : "none")};
`;

export const StyledButton = styled(Button)`
  margin-top: 16px;
  background-color: #ff1493;
  color: #fff;

  &:hover {
    background-color: #ff66b2;
  }
`;
export const Sidebar = styled("div")`
  width: 250px;
  height: 100%;
  background-color: #2c2a7d; /* אפשר לשנות לפי הצורך */
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  z-index: 1000;
`;

export const SidebarButton = styled(Button)`
  margin-bottom: 10px;
  background-color: #ff1493;
  color: white;

  &:hover {
    background-color: #ff66b2;
  }
`;
