export default {
  users: {},
  gitCheats: [
    { id: 1,
      owner: 0,
      title: 'Install Git',
      detail: [ 
          { description: 'Description 1', command: 'brew install git' }, 
          { description: 'Description 2', command: 'sudo apt-get git' },
          { description: 'Description 3', command: 'sudo yum git' } 
      ]
    },
    { id: 2,
      owner: 0,
      title: 'Clone Git Repo',
      detail: [ { description: 'Description 1', command: 'git clone repo-name' } ]
    },
    { id: 3,
      owner: 0,
      title: 'Push to Git',
      detail: [ 
          { description: 'Description 1', command: 'git push origin branch-name' }
      ]
    },
    { id: 4,
      owner: 1, 
      title: 'Custom Git Owner 1',
      detail: [ 
          { description: 'Description 1', command: 'git custom 1' }, 
          { description: 'Description 2', command: 'git custom 2' },
          { description: 'Description 3', command: 'git custom 3' },
          { description: 'Description 4', command: 'git custom 4' }, 
          { description: 'Description 5', command: 'git custom 5' },
          { description: 'Description 6', command: 'git custom 6' } 
      ]
    },
    { id: 4,
      owner: 2, 
      title: 'Custom Git Owner 2',
      detail: [ 
          { description: 'Description 1', command: 'git custom 1' }, 
          { description: 'Description 2', command: 'git custom 2' },
          { description: 'Description 3', command: 'git custom 3' },
          { description: 'Description 4', command: 'git custom 4' }, 
          { description: 'Description 5', command: 'git custom 5' },
          { description: 'Description 6', command: 'git custom 6' } 
      ]
    }
  ]
}