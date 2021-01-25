import { useFormatMessage } from 'react-intl-hooks';

export default function useLocalization(componentName?: string) {
  const t = useFormatMessage();

  const getMessage = (messageName: string, values?: any) => {
    let id = componentName;
    if (componentName) {
      id = `${componentName}.${messageName}`;
    }

    return t({ id }, values);
  };

  return getMessage;
}
