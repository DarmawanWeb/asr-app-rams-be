export default { extends: ['@commitlint/config-conventional'] }
export const rules = {
  'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'delate', 'chore', 'refactor', 'ci']],
}
