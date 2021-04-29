export class MockCredentialsService {
  credentials = {
    username: 'test',
    token: '123'
  };

  isAuthenticated(): boolean {
    return !!this.credentials;
  }

  setCredentials(credentials?: any, _remember?: boolean) {
    this.credentials = credentials || null;
  }
}
