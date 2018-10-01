import * as execa from 'execa'
import * as path from 'path'

export default function(resolvedGitDir: string) {
  // Set hooks directory according to user configurations
  const { stdout: customPath } = execa.shellSync(
    'git config --get core.hooksPath &2>/dev/null'
  )

  return customPath
    ? path.resolve(customPath)
    : path.join(resolvedGitDir, 'hooks')
}
