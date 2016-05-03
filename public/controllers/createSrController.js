'use strict';

angular
  .module('mean.myTheme')
  .controller('PriorityController', ['$scope',
function($scope) {
  $scope.data = {
    metatypeSelection: null,
    magicSelection: null,
    attributes: null,
    skills: null,
    nuyen: null,
    metatypeA: [
      {id: 'trollA', name: 'Troll (5)'},
      {id: 'orcA', name: 'Orc (7)'},
      {id: 'dwarfA', name: 'Dwarf (7)'},
      {id: 'elfA', name: 'Elf (8)'},
      {id: 'humanA', name: 'Human (9)'}
    ],
    metatypeB: [
      {id: 'trollB', name: 'Troll (0)'},
      {id: 'orcB', name: 'Orc (4)'},
      {id: 'dwarfB', name: 'Dwarf (4)'},
      {id: 'elfB', name: 'Elf (6)'},
      {id: 'humanB', name: 'Human (7)'}
    ],
    metatypeC: [
      {id: 'orcC', name: 'Orc (0)'},
      {id: 'dwarfC', name: 'Dwarf (1)'},
      {id: 'elfC', name: 'Elf (3)'},
      {id: 'humanC', name: 'Human (5)'}
    ],
    metatypeD: [
      {id: 'elfD', name: 'Elf (0)'},
      {id: 'humanD', name: 'Human (3)'}
    ],
    metatypeE: [
      {id: 'humanE', name: 'Human (1)'}
    ],
    magicA: [
      {id: 'magicianC', name: 'Magician (6)'},
      {id: 'mysticAdeptC', name: 'Mystic Adept (6)'},
      {id: 'technomancerC', name: 'Technomancer (6)'}
    ],
    magicB: [
      {id: 'magicianC', name: 'Magician (4)'},
      {id: 'mysticAdeptC', name: 'Mystic Adept (4)'},
      {id: 'technomancerC', name: 'Technomancer (4)'},
      {id: 'adeptC', name: 'Adept (6)'},
      {id: 'aspectedC', name: 'Aspected Magician (5)'}
    ],
    magicC: [
      {id: 'magicianC', name: 'Magician (3)'},
      {id: 'mysticAdeptC', name: 'Mystic Adept (3)'},
      {id: 'technomancerC', name: 'Technomancer (3)'},
      {id: 'adeptC', name: 'Adept (4)'},
      {id: 'aspectedC', name: 'Aspected Magician (3)'}
    ],
    magicD: [
      {id: 'adeptD', name: 'Adept (2)'},
      {id: 'aspectedD', name: 'Aspected Magician (2)'}
    ],
    magicE: [
      {id: 'null', name: '--None--'}
    ],
  }
}]);