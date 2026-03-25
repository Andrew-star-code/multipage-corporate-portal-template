$(function () {
  const treeData = [
    {
      text: 'Общие справочники',
      state: { opened: true },
      children: [
        { text: 'Сотрудники', icon: 'fa fa-users', a_attr: { href: 'handbooks/employees.html' } },
        { text: 'Подразделения', icon: 'fa fa-sitemap', a_attr: { href: 'handbooks/departments.html' } }
      ]
    },
    {
      text: 'Операционная деятельность',
      state: { opened: true },
      children: [
        { text: 'Бизнес-процессы', icon: 'fa fa-diagram-project', a_attr: { href: 'handbooks/processes.html' } },
        { text: 'Регламенты', icon: 'fa fa-file-lines', a_attr: { href: 'handbooks/regulations.html' } }
      ]
    }
  ];

  $('#directoryTree').jstree({
    core: { data: treeData },
    plugins: ['search', 'wholerow']
  });

  $('#directoryTree').on('select_node.jstree', function (event, data) {
    const url = data.node.a_attr?.href;
    if (url && url !== '#') {
      window.location.href = url;
    }
  });

  let timeout = null;
  $('#treeSearch').on('keyup', function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      const value = $('#treeSearch').val();
      $('#directoryTree').jstree(true).search(value);
    }, 250);
  });
});
