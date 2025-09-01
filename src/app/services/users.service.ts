import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { User, UserResponse, UsersResponse } from '@interfaces/req-response';
import { delay, map, Observable, tap } from 'rxjs';

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private http = inject(HttpClient);

  public users = computed(() => this.#state().users);
  public loading = computed(() => this.#state().loading);

  #state = signal<State>({
    loading: true,
    users: [],
  });

  constructor() {
    this.http
      .get<UsersResponse>('https://reqres.in/api/users', {
        headers: {
          'x-api-key': 'reqres-free-v1',
        },
      })
      .pipe(delay(1500))
      .subscribe((resp) =>
        this.#state.set({ loading: false, users: resp.data })
      );
  }

  getUsersById(id: string): Observable<User> {
    return this.http
      .get<UserResponse>('https://reqres.in/api/users', {
        headers: {
          'x-api-key': 'reqres-free-v1',
        },
        params: {
          id,
        },
      })
      .pipe(
        delay(1500),
        map((resp) => resp.data)
      );
  }
}
