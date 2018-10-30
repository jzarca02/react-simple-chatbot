export default [
  {
    key: 'id',
    types: ['string', 'number'],
    required: true,
  },
  {
    key: 'trigger',
    types: ['string', 'number', 'function'],
    required: false,
  },
  {
    key: 'end',
    types: ['boolean'],
    required: false,
  },
  {
    key: 'metadata',
    types: ['object'],
    required: false,
  },
  {
    key: 'hiddenaction',
    types: ['object'],
    required: true,
  },
];

