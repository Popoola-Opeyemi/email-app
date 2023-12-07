export const useSharedList = () => useState("shared-list", () => [
  {
    id: 1,
    title: 'Wave hello with video, reactions and more now in huddles',
    isChecked: false,
    read: false,
    archive:false,
    content:
      'In the early days of the pandemic, audio-only huddles helped recreate the informal discussions that traditionally took place in office cafés and hallways. Whether your team is remote, in the office, or a mix of both, working alongside your colleagues is as important as ever.',
  },
  {
    id: 2,
    title:
      '[JIRA] (LXQ-2604) Learning path-file-Existing File- two buttons for viewing the file',
    isChecked: false,
    read: false,
    archive:false,
    content:
      'In the early days of the pandemic, audio-only huddles helped recreate the informal discussions that traditionally took place in office cafés and hallways. Whether your team is remote, in the office, or a mix of both, working alongside your colleagues is as important as ever.',
  },
  {
    id: 3,
    title: 'Wave hello with video, reactions and more now in huddles',
    isChecked: false,
    read: false,
    archive:false,
    content:
      'In the early days of the pandemic, audio-only huddles helped recreate the informal discussions that traditionally took place in office cafés and hallways. Whether your team is remote, in the office, or a mix of both, working alongside your colleagues is as important as ever.',
  },
  {
    id: 4,
    title: 'Wave hello with video, reactions and more now in huddles',
    isChecked: false,
    read: false,
    archive:false,
    content:
      'In the early days of the pandemic, audio-only huddles helped recreate the informal discussions that traditionally took place in office cafés and hallways. Whether your team is remote, in the office, or a mix of both, working alongside your colleagues is as important as ever.',
  },
  {
    id: 5,
    title:
      '[JIRA] (LXQ-2604) Learning path-file-Existing File- two buttons for viewing the file',
    isChecked: false,
    read: false,
    archive:false,
    content:
      'In the early days of the pandemic, audio-only huddles helped recreate the informal discussions that traditionally took place in office cafés and hallways. Whether your team is remote, in the office, or a mix of both, working alongside your colleagues is as important as ever.',
  },
  {
    id: 6,
    title: 'Wave hello with video, reactions and more now in huddles',
    isChecked: false,
    read: false,
    archive:false,
    content:
      'In the early days of the pandemic, audio-only huddles helped recreate the informal discussions that traditionally took place in office cafés and hallways. Whether your team is remote, in the office, or a mix of both, working alongside your colleagues is as important as ever.',
  },
  {
    id: 7,
    title:
      '[JIRA] (LXQ-2604) Learning path-file-Existing File- two buttons for viewing the file',
    isChecked: false,
    read: false,
    archive:false,
    content:
      'In the early days of the pandemic, audio-only huddles helped recreate the informal discussions that traditionally took place in office cafés and hallways. Whether your team is remote, in the office, or a mix of both, working alongside your colleagues is as important as ever.',
  },
  {
    id: 8,
    title: 'Wave hello with video, reactions and more now in huddles',
    isChecked: false,
    read: false,
    archive:false,
    content:
      'In the early days of the pandemic, audio-only huddles helped recreate the informal discussions that traditionally took place in office cafés and hallways. Whether your team is remote, in the office, or a mix of both, working alongside your colleagues is as important as ever.',
  },
  {
    id: 9,
    title:
      '[JIRA] (LXQ-2604) Learning path-file-Existing File- two buttons for viewing the file',
    isChecked: false,
    read: false,
    archive:false,
    content:
      'In the early days of the pandemic, audio-only huddles helped recreate the informal discussions that traditionally took place in office cafés and hallways. Whether your team is remote, in the office, or a mix of both, working alongside your colleagues is as important as ever.',
  },
  {
    id: 10,
    title:
      '[JIRA] (LXQ-2604) Learning path-file-Existing File- two buttons for viewing the file',
    isChecked: false,
    read: false,
    archive:false,
    content:
      'In the early days of the pandemic, audio-only huddles helped recreate the informal discussions that traditionally took place in office cafés and hallways. Whether your team is remote, in the office, or a mix of both, working alongside your colleagues is as important as ever.',
  },
  {
    id: 11,
    title: 'Wave hello with video, reactions and more now in huddles',
    isChecked: false,
    read: false,
    archive:false,
    content:
      'In the early days of the pandemic, audio-only huddles helped recreate the informal discussions that traditionally took place in office cafés and hallways. Whether your team is remote, in the office, or a mix of both, working alongside your colleagues is as important as ever.',
  },
])

export const useArchiveMessages = () => useState("archive-messages", () => [])

export const useMessagesCount =  () => computed((List = useSharedList()) => {
  let c = 0
  for (let a=0; a<List.value.length; a++) {
      c++
  }
  return c
})

export const useArchiveMessagesCount = () => computed((List = useArchiveMessages()) => {
  let c = 0
  for (let a=0; a<List.value.length; a++) {
    c++
    // if (List.value[a].archive){
    // }
  }
  return c
})


