export default function HorizontalScroll() {
  return (
    <div className="max-w-[1440px] mx-auto flex">
      {/* Left Div (Scrollable but without visible scrollbars) */}
      <div
        className="overflow-x-auto"
        style={{
          width: '638px',
          scrollbarWidth: 'none', // For Firefox
          msOverflowStyle: 'none', // For Internet Explorer and Edge
        }}
      >
        <div className="h-[2264px] bg-blue-200" style={{ width: '800px' }}>
          {/* Content of the left div */}
          Scrollable content here 
        </div>
      </div>

      {/* Right Div (Fixed) */}
      <div className="pl-[12px] sticky right-0 top-0" style={{ width: '242px', height: '256px' }}>
        <div className="h-full bg-green-200">
          {/* Content of the right div */}
          Fixed content here
        </div>
      </div>
    </div>
  );
}
