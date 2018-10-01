import * as execa from 'execa'
import * as path from 'path'
import getHooksDir from '../getHooksDir'

jest.mock('execa')

describe('hooksDir', () => {
  it('should return default hooks dir (.git/hooks)', () => {
    ;(execa as any).shellSync.mockReturnValue({ stdout: '' })
    const dir = getHooksDir('.git')
    expect(dir).toBe('.git/hooks')
  })

  it('should return custom hooks dir (.githooks)', () => {
    ;(execa as any).shellSync.mockReturnValue({ stdout: '.githooks' })
    const dir = getHooksDir('.git')
    expect(dir).toBe(path.resolve('.githooks'))
  })
})
