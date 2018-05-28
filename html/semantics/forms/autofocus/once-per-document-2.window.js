async_test(t => {
  const input = document.createElement("input");
  input.autofocus = true;
  document.body.appendChild(input);
  input.remove();
  const input2 = document.createElement("input");
  input2.autofocus = true;
  document.body.appendChild(input2);
  t.step_timeout(() => {
    assert_equals(document.activeElement, document.body);
    t.done();
  }, 100);
}, "autofocus should only work for the first inserted element matching the conditions???");
