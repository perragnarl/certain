import WidgetLayout from "../WidgetLayout";

export default function Summary({ background, number, children}) {
  return (
    <WidgetLayout cols="1" rows="2" background={background}>
      <div>{children}</div>
    </WidgetLayout>
  );
}
