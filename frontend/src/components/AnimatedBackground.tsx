export const AnimatedBackground = () => {
  // Array of programming characters
  const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン<>[]{}()#&*+='.split('');
  
  // Generate random columns with characters
  const columns = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    delay: Math.random() * 2,
    duration: 10 + Math.random() * 4,
    characters: Array.from({ length: 10 }, () => chars[Math.floor(Math.random() * chars.length)]),
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900"></div>
      {columns.map((column) => (
        <div
          key={column.id}
          className="absolute text-fuchsia-500/20 font-mono text-sm whitespace-nowrap"
          style={{
            left: `${(column.id / 50) * 100}%`,
            top: '-100px',
            animation: `fall ${column.duration}s linear ${column.delay}s infinite`,
            textShadow: '0 0 10px rgba(34, 197, 94, 0.3)',
          }}
        >
          {column.characters.map((char, i) => (
            <div key={i}>{char}</div>
          ))}
        </div>
      ))}
    </div>
  );
};
