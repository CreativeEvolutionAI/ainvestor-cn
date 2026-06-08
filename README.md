# AInvestor Static Website

This folder is a standalone static website for GitHub Pages.

## GitHub Pages setup

1. Push this repository to GitHub.
2. In the repository, open **Settings -> Pages**.
3. Under **Build and deployment**, choose **GitHub Actions**.
4. Run the `Deploy AInvestor website to GitHub Pages` workflow.
5. Add `ainvestor.cn` as the custom domain if GitHub has not detected `CNAME`.

## DNS setup for `ainvestor.cn`

At the DNS provider for `ainvestor.cn`, add these root domain `A` records:

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

Optional IPv6 `AAAA` records:

```text
2606:50c0:8000::153
2606:50c0:8001::153
2606:50c0:8002::153
2606:50c0:8003::153
```

For `www.ainvestor.cn`, add a `CNAME` record pointing to your GitHub Pages host:

```text
CreativeEvolutionAI.github.io
```
