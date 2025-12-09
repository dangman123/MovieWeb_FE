# Hướng dẫn Commit và Tạo Branch Mới

## Bước 1: Commit code hiện tại

### Commit Message đề xuất:

```
feat: implement banner carousel and Redux store setup

- Add HeroCarousel component with auto-slide functionality
- Implement Redux store with banner slice for state management
- Add banner service to fetch data from API
- Update Header, Footer, and Container components
- Integrate HeroCarousel into homepage
- Add banner types and constants
```

### Cách commit bằng Git Desktop:

1. **Mở Git Desktop**
2. **Chọn tất cả các file thay đổi** ở panel bên trái:
   - Modified files:
     - `app/(client)/page.tsx`
     - `app/layout.tsx`
     - `components/features/HeroCarousel.tsx`
     - `components/layout/Footer/Footer.tsx`
     - `components/layout/Header/Header.tsx`
     - `components/layout/Header/Logo.tsx`
     - `components/layout/Header/index.ts`
     - `components/ui/Container.tsx`
     - `next.config.ts`
   - Untracked files (thêm mới):
     - `services/bannerService.ts`
     - `store/features/bannerSlice.ts`
     - `store/hooks.ts`
     - `store/provider.tsx`
     - `store/store.ts`
     - `types/banner.ts`

3. **Nhập commit message** vào ô "Summary":
   ```
   feat: implement banner carousel and Redux store setup
   ```

4. **Nhập mô tả chi tiết** vào ô "Description" (tùy chọn):
   ```
   - Add HeroCarousel component with auto-slide functionality
   - Implement Redux store with banner slice for state management
   - Add banner service to fetch data from API
   - Update Header, Footer, and Container components
   - Integrate HeroCarousel into homepage
   - Add banner types and constants
   ```

5. **Click "Commit to feature/initial-setup"**

## Bước 2: Tạo branch mới cho trang chủ

### Cách tạo branch mới bằng Git Desktop:

**Phương án 1: Tạo branch từ branch hiện tại (sau khi commit)**
1. Click vào menu dropdown ở trên cùng (hiện tại đang hiển thị `feature/initial-setup`)
2. Click "New branch"
3. Nhập tên branch: `feature/homepage` hoặc `feature/trang-chu`
4. Click "Create branch"
5. Branch mới sẽ được tạo và bạn sẽ tự động chuyển sang branch đó

**Phương án 2: Tạo branch từ main/master**
1. Click vào menu dropdown
2. Chọn branch `main` hoặc `master` (nếu có)
3. Click "New branch"
4. Nhập tên branch: `feature/homepage`
5. Click "Create branch"

## Bước 3: Push branch mới lên remote (nếu cần)

1. Click "Publish branch" hoặc "Push origin" ở Git Desktop
2. Branch mới sẽ được đẩy lên remote repository

---

## Lưu ý:

- **Tên branch nên theo convention**: `feature/tên-tính-năng`, `fix/tên-bug`, `refactor/tên-refactor`
- **Commit message nên rõ ràng**: Mô tả ngắn gọn những gì đã thay đổi
- **Nên commit thường xuyên**: Không để quá nhiều thay đổi trong một commit

## Các lệnh Git tương đương (nếu dùng command line):

```bash
# Commit code hiện tại
git add .
git commit -m "feat: implement banner carousel and Redux store setup

- Add HeroCarousel component with auto-slide functionality
- Implement Redux store with banner slice for state management
- Add banner service to fetch data from API
- Update Header, Footer, and Container components
- Integrate HeroCarousel into homepage
- Add banner types and constants"

# Tạo và chuyển sang branch mới
git checkout -b feature/homepage

# Hoặc nếu muốn tạo từ branch khác
git checkout main
git checkout -b feature/homepage

# Push branch mới lên remote
git push -u origin feature/homepage
```

