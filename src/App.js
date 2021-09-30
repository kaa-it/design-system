import { Button } from "./ui/button";
import { Box } from "./ui/box";
import { TextBlock, H3 } from "./ui/typography";
import { SearchIcon } from "./ui/icons/search";
import { Input } from "./ui/input";
import { useState, useRef, useContext } from "react";
import { EditIcon } from "./ui/icons/edit";
import { Context } from "./index";

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const EmailInput = ({ value, onChange, name, size = "default" }) => {
  const [fieldDisabled, setDisabled] = useState(true);

  const [error, setError] = useState(false);

  const inputRef = useRef(null);

  const onIconClick = () => {
    setDisabled(false);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const validateField = (value) => {
    setError(!validateEmail(value));
  };

  const onFocus = () => {
    setError(false);
  };

  const onBlur = (e) => {
    if (e.target.value) {
      validateField(e.target.value);
    } else {
      setError(false);
    }
    setDisabled(true);
  };
  return (
    <Input
      type="email"
      placeholder="Email"
      label="Email"
      onChange={onChange}
      icon={EditIcon}
      value={value}
      ref={inputRef}
      onBlur={onBlur}
      onFocus={onFocus}
      name={name}
      error={error}
      disabled={fieldDisabled}
      onIconClick={onIconClick}
      errorText={"Ой, произошла ошибка!"}
      size={size}
    />
  );
};

export default function App() {
  const [form, setValue] = useState({ name: "", email: "" });
  const { onThemeChange } = useContext(Context);
  const onChange = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };
  const onClick = () => {
    onThemeChange();
  };
  return (
    <Box p={8}>
      <Box mb={4}>
        <Button primary={true} onClick={onClick} width="45%">
          Перключить тему
        </Button>
      </Box>
      <Box mb={4}>
        <Button secondary={true}>Secondary Button</Button>
      </Box>
      <Box mb={4}>
        <Button secondary={true} fullWidth={true}>
          Secondary Button FullWidth
          <SearchIcon />
        </Button>
      </Box>
      <Box mb={4}>
        <Button secondary={true}>
          Secondary Button
          <SearchIcon />
        </Button>
      </Box>
      <hr />
      <Box mb={4}>
        <TextBlock size="huge">Huge text</TextBlock>
      </Box>
      <Box mb={4}>
        <TextBlock size="huge" color="secondary">
          Huge text
        </TextBlock>
      </Box>
      <Box mb={4}>
        <TextBlock size="large">Large text</TextBlock>
      </Box>
      <Box mb={4}>
        <TextBlock size="large" color="secondary">
          Large text
        </TextBlock>
      </Box>
      <Box mb={4}>
        <TextBlock size="medium">Medium text</TextBlock>
      </Box>
      <Box mb={4}>
        <TextBlock size="medium" color="secondary">
          Medium text
        </TextBlock>
      </Box>
      <Box mb={4}>
        <TextBlock size="default">Default text</TextBlock>
      </Box>
      <Box mb={4}>
        <TextBlock size="default" color="secondary">
          Default text
        </TextBlock>
      </Box>
      <Box mb={4}>
        <TextBlock size="huge" color="danger">
          Default text
        </TextBlock>
      </Box>
      <hr />
      <Box mb={4}>
        <Input
          onChange={onChange}
          value={form.name}
          name="name"
          icon={SearchIcon}
          placeholder="Имя"
          label="Имя"
          onIconClick={() => alert(form.name)}
        />
      </Box>
      <Box mb={4}>
        <EmailInput onChange={onChange} value={form.email} name={"email"} />
      </Box>
    </Box>
  );
}
