/** A styled hello in the DevTools console. */
export function consoleHello(message: string, email?: string) {
  const owl = [
    '  ▲       ▲  ',
    ' ( ⚙ )‿( ◉ ) ',
    '   ╲  ◆  ╱   ',
    '━━●━━║━║━━●━━',
  ].join('\n');
  // eslint-disable-next-line no-console
  console.log(
    `%c${owl}\n%c${message}${email ? `\n${email}` : ''}`,
    'font:12px/1.2 monospace;color:#FF6A13',
    'font:13px/1.5 system-ui;color:inherit',
  );
}
